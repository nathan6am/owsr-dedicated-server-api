import dbConnect from "./dbConnect";
import Event from "./models/Event";

export async function getAllEvents() {
  await dbConnect();
  const events = await Event.find({});
  return events;
}

export async function createEvent(event) {
  await dbConnect();
  const created = await Event.create(event);
  return created;
}
