const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    project: { type: String, required: true },
    responsible: { type: String, required: true }
});

module.exports = mongoose.model("activities", ActivitySchema);