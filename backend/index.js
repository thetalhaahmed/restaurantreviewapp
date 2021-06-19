import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";

// init enviroment vars
dotenv.config();

// init mongodb
const MongoClient = mongodb.MongoClient;

//using port from env
const port = process.env.PORT || 8000;

//connect mongodb
MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolSize: 50,
  wtimeout: 250,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await ReviewsDAO.injectDB(client);
    await RestaurantsDAO.injectDB(client);

    app.listen(port, () => {
      console.log("listening on the port ", port);
    });
  });
