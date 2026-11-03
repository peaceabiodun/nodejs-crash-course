import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import __dirname from './util/path.js';
import { engine as expressHandlebars } from 'express-handlebars';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { get404 } from './controllers/error.js';

const app = express();
const hbs = expressHandlebars({
  layoutsDir: 'views/layouts/',
  extname: '.hbs',
  defaultLayout: 'main-layout',
});

app.engine('hbs', hbs);

app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', 'views');

//use method.
// app.use('/add-product', (req, res, next) => {
//   console.log('another middle ware');
//   res.send('<h2>Add Product</h2>');
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(get404);

const server = http.createServer(app);

server.listen(3000);
