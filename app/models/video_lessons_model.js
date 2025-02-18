const { Schema, model } = require('mongoose')

const videoSchema = new Schema({
    title: String,
    url: String,
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    share: {
        type: Number,
        default: 0
    },
    comments: [{
        type: String
    }]
}, { timestamps: true })

const VideoLesson = model('VideoLesson', videoSchema)

module.exports = VideoLesson