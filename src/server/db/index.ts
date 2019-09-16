import * as mysql from 'mysql';
import config from '../config';

export const connection = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        console.log(query)
        connection.query(query, values, (err, results) => {
            if(err) reject(err)
            resolve(results)
        })
    })
}

import authors from './queries/authors'
import accesstokens from './queries/accesstokens'
import blogs from './queries/blogs'
import blogtags from './queries/blogtags'
import tags from './queries/tags'

export default {
    blogs,
    blogtags,
    tags,
    authors,
    accesstokens
}