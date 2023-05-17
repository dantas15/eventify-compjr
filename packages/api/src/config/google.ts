import { config } from 'dotenv';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

config();

export function googlePassportConfig() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${
          process.env.API_URL || `http://127.0.0.1:${process.env.port}`
        }/auth/google/callback`,
        passReqToCallback: true
      },
      (request, accessToken, refreshToken, profile, done) => {
        // TODO get jwt token
        return done(null, { profile /*, token */ });
      }
    )
  );
}
