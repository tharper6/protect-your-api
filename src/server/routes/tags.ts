import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let tags = await db.tags.getAll();
        res.json(tags)
    } catch (error) {
        console.log(error)
        res.status(500).json('Code Fudged up!')
    }
})

export default router;