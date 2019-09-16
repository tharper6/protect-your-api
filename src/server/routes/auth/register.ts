import * as express from 'express';

import DB from '../../db';
import {HashPassword} from '../../utils/security/password'
import {CreateToken} from '../../utils/security/tokens'
import authors from '../../db/queries/authors';

const router = express.Router();

router.post('/', async(req, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let result: any = await DB.authors.insert(authors);
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;