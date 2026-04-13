const express = require("express");
const router = express.Router();
const auth = require("../auth/middleware/authMiddleware");

const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

router.post("/", auth, createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

module.exports = router;