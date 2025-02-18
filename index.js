require('dotenv').config();
const express = require('express');
const cors = require('cors');
const configDB = require('./config/db');
const { createArticle, getArticle } = require('./app/controllers/article_ctlr');
const { search, filter } = require('./app/controllers/search_ctlr');
const { createVideo, getVideos, getIndividualLesson } = require('./app/controllers/video_lesson_ctlr');

const app = express();

configDB();

app.use(express.json());
app.use(cors())

const port = process.env.PORT

//article routes
app.post('/api/article', createArticle);
app.get('/api/articles', getArticle);

//search
app.post('/api/search/:type', search);
app.post('/api/filter/:type', filter);

//video lectures
app.post('/api/video', createVideo);
app.get('/api/lectures', getVideos);
app.get('/api/lecture/:id', getIndividualLesson)

app.listen(port, () => {
    console.log('connected to port')
})