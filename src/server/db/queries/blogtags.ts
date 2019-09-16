import { connection, Query } from '../index';

const getAll = (blogid: number) => Query('CALL spGetBlogTags(?)', [blogid])
const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUES (?)', [[blogid, tagid]])


export default {
    getAll,
    insert
}