import express from 'express';
import { getAllReviews } from '../controllers/review.js';

const router = express.Router();

router.get("/all/:productId", getAllReviews);

export default router;
`   `