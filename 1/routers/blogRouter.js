const express = require("express");
const router = express.Router();
const {
  getblog,
  getBlogs,
  addblog,
  deleteblog,
  updateblog,
} = require("../controllers/blogController");

// GET all blog
router.get("/", getBlogs);

// POST a new blog
router.post("/", addblog);

// GET a single blog
router.get("/:id", getblog);

// DELETE a blog
router.delete("/:id", deleteblog);

// Update blog using PUT
router.put("/:id", updateblog);

module.exports = router;
