import {Query} from '../index';

const findOneByEmail = async (email: string) => Query(`SELECT * FROM authors WHERE email = '${email}' LIMIT 1`);
const findOneById = async(id: number) => Query(`SELECT * FROM authors WHERE id = ${id} LIMIT 1`);
const insert = async(author: any) => Query(`INSERT INTO authors (email, name, password, role) VALUES ?`, author)

export default {
    findOneByEmail,
    findOneById,
    insert
}