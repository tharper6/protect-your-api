import * as express from 'express';

import DB from '../../db'
import { RequestHandler } from 'express-serve-static-core';

const router = express.Router();

const isAdmin: RequestHandler = (req: any, res, next) => {
    if(!req.user || req.user.role !== 'guest') {
        return res.sendStatus(401)
    } else {
        return next();
    }
};

router.get('/', async (req, res) => {
    try {
        let blogs = await DB.blogs.getAll();
        res.send(blogs)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

router.get('/:id', isAdmin, async (req, res, next) => {
    try {
        let blog = await DB.blogs.getOne(req.params.id);
        res.send(blog)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

export default router;