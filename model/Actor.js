const { model, Schema } = require("mongoose");
const ActorSchema = new Schema({
  name: { type: String, required: true },
  DOB: { type: Date },
  image: String,
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});
module.exports = model("Actor", ActorSchema);
