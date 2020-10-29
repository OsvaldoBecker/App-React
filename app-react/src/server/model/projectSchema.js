const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title : {type: String, required: true },
    details : {type: String, required: true },
    beginDate : {type: Date, required: true },
    endDate : {type: Date, required: true },
    demandantName: { type: String, required: true },
    demandantEmail: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("projects", ProjectSchema);