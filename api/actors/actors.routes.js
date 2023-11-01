const express = require("express");
const {
  getAllActors,
  updateActor,
  createActor,
  deleteActor,
} = require("./actors.controller");
const router = express.Router();
const upload = require("../../middleware/multer");

router.get("/", getAllActors);
router.put("/:actorId", updateActor);
router.post("/", upload.single("image"), createActor);
router.delete("/:actorId", deleteActor);
module.exports = router;
