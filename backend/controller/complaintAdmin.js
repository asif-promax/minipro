const express = require("express");
const ComplaintModel = require("../models/complaint");
const router = express.Router();

router.get("/all-complaints", async (req, res) => {
  try {
    const allComplaints = await ComplaintModel.find()
      .populate("user", "email number") // Fetch email and number from User model
    //   .exec();

    res.status(200).json({ allComplaints });
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
