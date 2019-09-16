import * as express from 'express';
import * as path from 'path'
import * as passport from 'passport';

import './middleware/localstrategy';
import './middleware/bearerstrategy';
import routes from './routes';
import { HashPassword } from './utils/security/password';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(passport.initialize());
app.use(routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

console.log(HashPassword("pass123"))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
