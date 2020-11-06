const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String},
    beginDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    responsible: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        require: true, 
    },
    project: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', 
        require: true, 
    }
});

module.exports = mongoose.model("Activity", ActivitySchema);