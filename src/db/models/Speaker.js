import mongoose from "mongoose";

const SpeakerSchema = new mongoose.Schema({
  rank: String,
  fullName: String,
  branch: String,
  unit: String,
  bio: String,
  portraitUrl: String,
});

module.exports =
  mongoose.models.Speaker || mongoose.model("Speaker", SpeakerSchema);
