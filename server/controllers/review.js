import { User } from "../models/user.js";
import { Order } from "../models/order.js";
import { Review } from '../models/review.js';
import { asyncError } from "../middlewares/error.js";


export const getAllReviews = asyncError(async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const reviews = await Review.find({ product: productId });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});