const { Schema, model } = require('mongoose')

const formdataschema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    relevantInfo: {
        type: String,
    },
    tid: {
        type: Date,
    }
})

module.exports = model('Formdata', formdataschema)