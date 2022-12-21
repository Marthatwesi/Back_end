import Jwt from 'passport-jwt';
import passport from 'passport';
import signUpModel from '../model/signUpUser';
import dotenv from 'dotenv'

dotenv.config()

const JwtStrat = Jwt.Strategy;

const extJwt= Jwt.ExtractJwt;

async function checkPass(){
    passport.use(
        new JwtStrat(
            {
                secretOrKey: process.env.MY_SECRET_TOKEN,
                jwtFromRequest: extJwt.fromAuthHeaderAsBearerToken()
            },
            (jwtPayload, done) => {
                return signUpModel.findOne({ _id: jwtPayload.id })
                  .then((user) => {
                    return done(null, user);
                  })
                  .catch((err) => done(err));
              }
        )
    )
}
export default checkPass;