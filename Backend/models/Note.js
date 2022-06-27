const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title: String,
    description: String,
    date:{
        type:Date,
        default:Date.now()
    }

});

module.exports =mongoose.model("Notes",notesSchema);

