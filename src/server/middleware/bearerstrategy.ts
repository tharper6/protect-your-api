import * as passport from 'passport';
import * as bearerStrategy from 'passport-http-bearer';

import {ValidToken} from '../utils/security/tokens'
import DB from '../db';

passport.use(new bearerStrategy.Strategy(async (token, done) => {
    try {
        let payload = await ValidToken(token);
        let [user]: any = await DB.authors.findOneById(payload.userid)
        if(user) {
            done(null, user);
        } else {
            done(null, false)
        }
    } catch (error) {
        done(error)
    }
}))