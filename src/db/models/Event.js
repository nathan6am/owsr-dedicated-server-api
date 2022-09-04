import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
  name: String,
  startTime: Date,
  endTime: Date,
  room: String,
  sessionType: {
    type: String,
    required: false,
    enum: ["keynote", "panel", "innovation", "meal", "other", "technical"],
  },
  speakers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Speaker" }],
  panelists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Speaker" }],
  moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "Speaker" }],
  papers: [{ title: String, author: String }],
});
const EventSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  venue: {
    name: String,
    address: {
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      zip: Number,
    },
    url: String,
  },
  exhibitors: [{ name: String, booth: String, url: String }],
  sponsors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sponsor" }],
  faq: [{ question: String, answer: String }],
  sessions: [sessionSchema],
});
module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema);
