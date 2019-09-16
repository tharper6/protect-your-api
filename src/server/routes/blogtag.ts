import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:blogid', async (req, res) => {
    try {
        let [blogtags]: any = await db.blogtags.getAll(req.params.blogid)
        res.json(blogtags);
    } catch (error) {
        console.log(error)
        res.status(500).json('Code Fudged up!')
    }
})



export default router;