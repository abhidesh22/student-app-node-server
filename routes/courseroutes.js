// Define the course CRUD operation routes

import express from "express";
import {
  getCourses,
  createCourse,
  deleteCourse
} from "../controllers/courses-controller.js";
import { notFound } from "../middleware/error-handler.js";

const router = express.Router();

router.route("/").get(getCourses);
router.route("/create").post(createCourse);
router
  .route("/:name")
  .delete(deleteCourse);
router.use(notFound);
export default router;