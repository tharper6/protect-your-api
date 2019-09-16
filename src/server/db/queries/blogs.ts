import { connection, Query } from '../index';

const getAll = () => Query('SELECT * FROM blogs')
const getOne = (id: number) => Query('SELECT * FROM blogs WHERE id = ?', [id])
const postOne = (title: string, content: string, authorid: number) => Query('INSERT INTO blogs (title, content, authorid) VALUES (?)', [[title, content, authorid]])
const deleteOne = (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id])
const editOne = (title: string, content: string, id: number) => Query('UPDATE blogs SET title = ?, content =? WHERE id = ?', [title, content, id])

export default {
    getAll,
    getOne,
    postOne,
    deleteOne,
    editOne
}

