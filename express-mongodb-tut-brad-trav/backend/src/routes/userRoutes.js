const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getUserData,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUserData);

module.exports = router;
