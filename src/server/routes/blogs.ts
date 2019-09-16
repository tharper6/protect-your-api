import { Router } from 'express';
import db from '../db'

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = req.params.id
    if (id) {
        try {
            let [blog]: any = await db.blogs.getOne(id);
            res.json(blog)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    } else {
        try {
            let blogs = await db.blogs.getAll();
            res.json(blogs)
        } catch (error) {
            console.log(error)
            res.status(500).json('Code Fudged up!')
        }
    }
    
})

router.post('/', async (req, res) => {
    let title = req.body.title
    let content = req.body.content
    let authorid = req.body.authorid
    try {
        let blog = await db.blogs.postOne(title, content, authorid)
        res.json(blog)
    } catch (error) {
        console.log(error)
        res.status(500).json('Code Fudged up!')
    }
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    try {
        let blog = db.blogs.deleteOne(id)
        res.json('Blog Deleted')
    } catch (error) {
        console.log(error)
        res.status(500).json('Code Fudged up!')
    }
})

router.put('/:id', async (req, res) => {
    try {
        let result = await db.blogs.editOne(req.body.title, req.body.content, req.params.id)
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json('Code Fudged up!')
    }
})
export default router;