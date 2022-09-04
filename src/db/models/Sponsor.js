import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  name: String,
  url: String,
  logoUrl: String,
});

module.exports =
  mongoose.models.Sponsor || mongoose.model("Sponsor", SponsorSchema);
