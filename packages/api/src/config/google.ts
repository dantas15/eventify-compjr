import { config } from 'dotenv';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';

import { secret, expiresIn } from '@/config/jwt';
import { User } from '@/models/User';
import { AppError } from "@/errors/AppError";

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
        const userExists = await User.findOne({ googleId: profile.id });

        if (userExists) {
          const payload = {
            googleId: profile.id,
            userId: userExists._id.toString()
          };

          jwt.sign(payload, secret, {
            expiresIn
          }, (err, token) => {
            if(err) throw new AppError("Could not sign JWT");
            return done(null, { profile, token });
          });
        } else {
          const user = new User({
            googleId: profile.id,
            // TODO maybe look for the first verified email?
            email: profile.emails ? profile.emails[0].value : undefined,
            name: profile.displayName
          });

          await user.save();

          const payload = {
            googleId: profile.id,
            userId: user._id.toString()
          };

          jwt.sign(payload, secret, {
            expiresIn
          }, (err, token) => {
            if(err) throw new AppError("Could not sign JWT");
            return done(null, { profile, token });
          });
        }
      }
    )
  );
}