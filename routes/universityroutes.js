// Define the student CRUD operation routes

import express from "express";
import {
  getUniversities,
  createUniversity,
  deleteUniversity
} from "../controllers/university-controllers.js";
import { notFound } from "../middleware/error-handler.js";

const router = express.Router();

router.route("/").get(getUniversities);
router
  .route("/:name")
  .delete(deleteUniversity)
router.route("/create").post(createUniversity);
router.use(notFound);

export default router;