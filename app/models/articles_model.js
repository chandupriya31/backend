const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    title: String,
    views: Number,
    category: String,
    content: String
}, { timestamps: true })

const Article = model('Article', articleSchema)

module.exports = Article