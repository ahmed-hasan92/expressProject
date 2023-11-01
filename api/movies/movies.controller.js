const Movie = require("../../model/Movie");
const Actor = require("../../model/Actor");
const Rivew = require("../../model/Rivew");
exports.getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find().populate("actors");
    res.status(200).json(allMovies);
  } catch (error) {
    next(error);
  }
};

exports.createMovie = async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({ message: "Successfully created!", newMovie });
  } catch (error) {
    next(error);
  }
};

exports.addActorToMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const { actorId } = req.params;

    const movie = await Movie.findById(movieId);
    const actor = await Actor.findById(actorId);
    if (!movie || !actor) {
      res.status(404).json({ message: "One or both of the IDs aren't found " });
    }

    await movie.updateOne({ $push: { actors: actor } });
    await actor.updateOne({ $push: { movies: movie } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deleteMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const findMovie = await Movie.findById(movieId);
    if (findMovie) {
      const newMovie = await Movie.deleteOne(req.body);
      res.status(201).json(newMovie);
    } else {
      res.status(404).json("Movie isn't found");
    }
  } catch (error) {
    next(error);
  }
};

exports.updateMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const findMovie = await Movie.findById(movieId);
    if (findMovie) {
      const update = await Movie.updateOne(req.body);
      res.status(202).json(update);
    } else {
      res.status(404).json("Movie isn't found");
    }
  } catch (error) {
    next(error);
  }
};

exports.addRivew = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = Movie.findById(movieId);
    if (movie) {
      req.body.movie = movieId;

      const newRivew = await Rivew.create(req.body);
      await movie.updateOne({ $push: { rivews: newRivew } });
      res.status(201).json(newRivew);
    } else {
      res.status(404).json("movie isn't exist");
    }
  } catch (error) {
    next(error);
  }
};
