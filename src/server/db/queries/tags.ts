import { connection, Query } from '../index';

const getAll = () => Query('SELECT * FROM tags')


export default {
    getAll
}