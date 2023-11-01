const { model, Schema } = require("mongoose");
const MovieSchema = new Schema({
  name: { type: String, required: true },
  releaseYear: { type: String },
  plot: { type: String, default: "No plot is available for this movie" },
  genre: String,
  image: String,
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
  rivews: [{ type: Schema.Types.ObjectId, ref: "Rivew" }],
});

module.exports = model("Movie", MovieSchema);
