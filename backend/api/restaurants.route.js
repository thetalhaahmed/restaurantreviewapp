import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

// creating router for APIS
const router = express.Router();

//Restaurants route
router.route("/").get(RestaurantsCtrl.apiGetRestaurants);
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantsById);
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantsCuisines);

//Reviews route
router.route("/review").post(ReviewsCtrl.apiPostReview);

router.route("/review").put(ReviewsCtrl.apiUpdateReview);

router.route("/review").delete(ReviewsCtrl.apiDeleteReview);

export default router;
