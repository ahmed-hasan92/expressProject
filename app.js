const express = require("express");
const morgan = require("morgan");
const notFound = require("./middleware/notFound");
const path = require("path");
const cors = require("cors");
const movieRoutes = require("./api/movies/movies.routes");
const actorRoutes = require("./api/actors/actors.routes");
const rivewROutes = require("./api/rivews/rivew.routes");

const connectDB = require("./database");
const errorHandler = require("./middleware/errorHandler");
app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/movie", movieRoutes);
app.use("/actor", actorRoutes);
app.use("/rivew", rivewROutes);

app.use(errorHandler);
app.use(notFound);
connectDB();
app.listen(7000, () => {
  console.log("The port is working fine");
});
