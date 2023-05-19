import { config } from 'dotenv';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';

import { secret, expiresIn } from '@/config/jwt';
import User from '@/models/User';

config();

export function googlePassportConfig() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${
          process.env.API_URL || `http://127.0.0.1:${process.env.PORT}`
        }/auth/google/callback`,
        passReqToCallback: true
      },
      async (request, accessToken, refreshToken, profile, done) => {
        const userExists = await User.findOne({ googleId: profile.id }).exec();

        if (userExists) {
          const token = jwt.sign(userExists.id, secret, {
            expiresIn
          });
          return done(null, { profile, token });
        }

        const user = new User({
          googleId: profile.id,
          email: profile.emails ? profile.emails[0].value : undefined,
          name: profile.displayName
        });

        await user.save();

        const token = jwt.sign(user.id, secret, {
          expiresIn
        });
        return done(null, { profile, token });
      }
    )
  );
}
