const Article = require("../models/articles_model");

const createArticle = async (req, res) => {
    const body = req.body;
    try {
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ msg: 'Please provide proper data' })
        }
        const article = await Article.create(body)
        res.json(article)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getArticle = async (req, res) => {
    try {
        const articles = await Article.find({})
        res.json(articles)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createArticle,
    getArticle
}