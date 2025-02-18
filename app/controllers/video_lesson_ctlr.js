const VideoLesson = require("../models/video_lessons_model")


const createVideo = async (req, res) => {
    const body = req.body
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ msg: "please add proper data" })
    }
    try {
        const video = await VideoLesson.create(body)
        res.json(video)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getVideos = async (req, res) => {
    try {
        const videoLessons = await VideoLesson.find({})
        res.json(videoLessons)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getIndividualLesson = async (req, res) => {
    const id = req.params.id
    try {
        const videoLecture = await VideoLesson.findById({ id })
        res.json(videoLecture)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createVideo,
    getVideos,
    getIndividualLesson
}