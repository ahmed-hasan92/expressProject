const express = require("express");
const {
  addActorToMovie,
  updateMovie,
  createMovie,
  deleteMovie,
  getAllMovies,
  addRivew,
} = require("./movies.controller");
const router = express.Router();
const upload = require("../../middleware/multer");
router.get("/", getAllMovies);
router.put("/:movieId", updateMovie);
router.post("/", upload.single("image"), createMovie);
router.delete("/:movieId", deleteMovie);
router.post("/:movieId/:actorId", addActorToMovie);
router.post("/:movieId", addRivew);

module.exports = router;
