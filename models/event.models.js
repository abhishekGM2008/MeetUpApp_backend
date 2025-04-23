const mongoose = require("mongoose")
const eventSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true
    },
    eventMode: {
        type: String,
        enum: ["Offline" , "Online"]
    },
    Details: {
        type: String,
        reuired: true
    },
    eventImgUrl: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    },
    hostedBy: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    speakers: {
        type: [String]
    },
    thumbnail: {
        type: String
    },
    speakersUrl: {
        type: [String]
    },
    eventPrice: {
        type: String
    },
    desginationSpeakers: {
        type: [String]
    },
    dress: {
        type: String
    },
    age: {
        type: String
    },
    eventTags: {
        type: [String]
    }
}, {timestamps: true,})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event


