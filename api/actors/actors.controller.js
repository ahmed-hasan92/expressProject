const Actor = require("../../model/Actor");
const Movie = require("../../model/Movie");
exports.getAllActors = async (req, res, next) => {
  try {
    const allActors = await Actor.find().populate("movies");
    res.status(200).json(allActors);
  } catch (error) {
    next(error);
  }
};

exports.createActor = async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  try {
    const newActor = await Actor.create(req.body);
    res.status(201).json({ message: "Successfully created!", newActor });
  } catch (error) {
    next(error);
  }
};

exports.deleteActor = async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const findActor = await Actor.findById(actorId);
    if (findActor) {
      const newActor = await Actor.deleteOne(req.body);
      res.status(201).json(newActor);
    } else {
      res.status(404).json("Actor isn't found");
    }
  } catch {
    next(error);
  }
};

exports.updateActor = async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const findActor = await Actor.findById(actorId);
    if (findActor) {
      const update = await Actor.updateOne(req.body);
      res.status(202).json(update);
    } else {
      res.status(404).json("Actor isn't found");
    }
  } catch (error) {
    next(error);
  }
};
