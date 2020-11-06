const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String },
    demandantName: { type: String, required: true },
    demandantEmail: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Project", ProjectSchema);