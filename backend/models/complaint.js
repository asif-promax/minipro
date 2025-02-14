const mongoose = require("mongoose");

const complaintsModelSchema = new mongoose.Schema({
  models: { type: String, required: true, unique: true },
  complaintTypes: [{ type: String }], // Fix name from complaintType to complaintTypes
});

module.exports = mongoose.model("ComplaintModel", complaintsModelSchema);
