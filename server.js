const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express();

const url = 'mongodb://localhost/Blog';

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err));

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', async (req, res) =>{
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index.ejs', {articles: articles}) 
});

app.use('/articles', articleRouter);
app.listen(5000);