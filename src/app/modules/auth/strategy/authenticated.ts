import { ExtractJwt, Strategy } from 'passport-jwt';
import passport from 'passport';
import userRepository from '@modules/users/users.repository';
import { jwtEnv } from '@env/jsonwebtoken';

passport.use(
  new Strategy(
    {
      secretOrKey: jwtEnv.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        const user = await userRepository.findOne(payload.sub);
        if (!user) return done(null, false);
        return done(null, {
          ...user,
          password: undefined,
        });
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport.authenticate('jwt', { session: false });
