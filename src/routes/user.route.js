import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../validation/user.schema.js";
const router = express.Router();

router.route("/").get(getUsers).post(validate(createUserSchema), createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
