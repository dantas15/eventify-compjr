import { OAuth2Client, TokenPayload } from 'google-auth-library';
import jwt from 'jsonwebtoken';

import { clientId } from '@/config/google';
import { AppError } from '@/errors/AppError';
import { secret, expiresIn } from '@/config/jwt';
import { User } from '@/models/User';

const client = new OAuth2Client(clientId);

async function verifyCredentials(credential: string) {
  const ticket = await client.verifyIdToken({ idToken: credential });

  return ticket.getPayload();
}

export class ValidateGoogleCredentialService {
  async execute(credential: string) {
    try {
      const profile = await verifyCredentials(credential);
      let validToken: string | undefined = undefined;

      if (!profile) {
        throw new AppError('Could not validate credentials', 401);
      }

      // profile.sub is the googleId and the equivalent of the id in passport's profile.id
      const userExists = await User.findOne({ googleId: profile.sub });

      if (userExists) {
        const payload = {
          googleId: profile.sub,
          userId: userExists._id.toString()
        };

        validToken = jwt.sign(payload, secret, {
          expiresIn
        });
      } else {
        const user = new User({
          googleId: profile.sub,
          email: profile.email,
          name: profile.name
        });

        await user.save();

        const payload = {
          googleId: profile.sub,
          userId: user._id.toString()
        };

        validToken = jwt.sign(payload, secret, {
          expiresIn
        });
      }

      return validToken ? validToken : undefined;
    } catch (err) {
      throw new AppError('Could not validate credentials', 401);
    }
  }
}
