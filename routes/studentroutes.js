// Define the student CRUD operation routes

import express from "express";
import {
  getStudentByRollno,
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
  getStudentsPerUniversity,
  getStudentsPerSubject
} from "../controllers/students-controller.js";
import { notFound } from "../middleware/error-handler.js";

const router = express.Router();

router.route("/").get(getStudents);
router
  .route("/:rollno")
  .get(getStudentByRollno)
  .delete(deleteStudent)
  .put(updateStudent);

router
  .route("/byuni/:id")
  .get(getStudentsPerUniversity)

router
  .route("/bysubject/:id")
  .get(getStudentsPerSubject)

router.route("/create").post(createStudent);
router.use(notFound);
export default router;