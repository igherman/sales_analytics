const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const importRoute = require('./routes/import');

const MONGODB_URI = 'mongodb+srv://user1:iOowYB4TwCdLmFgX@cluster0-0oamr.mongodb.net/sales_analytics?retryWrites=true&w=majority';
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(importRoute);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        app.listen(8080);
    })
    .catch(err => console.log(err));


