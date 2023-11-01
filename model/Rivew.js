const { model, Schema } = require("mongoose");
const RivewSchema = new Schema({
  title: { type: String, default: "No title" },
  content: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  movies: { type: Schema.Types.ObjectId, ref: "Movie" },
});

module.exports = model("Rivew", RivewSchema);
