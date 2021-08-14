const express = require('express');
const articleRouter = require('./routes/articles.js')
const app = express();

app.set('view engine', 'ejs')

app.use('/articles', articleRouter);

app.get('/', (req, res) =>{
    const articles = [{
        title: 'Test Article', 
        createdAt: new Date(),
        description: 'Test Desc'
    }, 
    {
        title: 'Test Article2', 
        createdAt: new Date(),
        description: 'Test Desc2'
    }]
    res.render('articles/index.ejs', {articles: articles});
});

app.listen(5000);