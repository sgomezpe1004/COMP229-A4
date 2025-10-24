import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Create a new user
router.route("/users").post(userCtrl.create);

// Get all users
router.route("/users").get(userCtrl.list);

// Delete multiple users (removeMany)
router.route("/users").delete(userCtrl.removeMany);

// Individual user routes with authorization
router
  .route("/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

// Middleware to get user by ID
router.param("userId", userCtrl.userByID);

export default router;
