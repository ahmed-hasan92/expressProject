const Rivew = require("../../model/Rivew");
exports.getRivews = async (req, res, next) => {
  try {
    const allRivews = await Rivew.find().populate("movies");
    res.status(200).json(allRivews);
  } catch (error) {
    next(error);
  }
};
