const mongoose = require("mongoose");
const blogSchema = require("../models/blogModel");

// get all Todoblogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await blogSchema.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  res.status(200).json({ message: "Hello from blogs" });
};

// Add one blog
const addblog = async (req, res) => {
  try {
    const {title, content, publishedDate, published} = req.body;
    if (!title || !content || !publishedDate || published === undefined) {
      return res
        .status(400)
        .json({ error: "All fields are required" });
    }

    const newBlog= new blogSchema({ title, content, publishedDate, published});
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    console.error('Error in add blog:');
    res.status(500).json({ error: "Internal Server Error" });
  }


};


const getblog = async (req, res) => {
  try {
    const blog = await blogSchema.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg:"blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 
};


const deleteblog = async (req, res) => {
  try {
    const blog = await blogSchema.findOneAndDelete({ _id: req.params.id });
    if (!blog) {
      return res.status(404).json({ msg: "blog not found" });
    }
    res.json({ msg: "blog deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateblog = async (req, res) => {
  try {
    const blog = await blogSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ msg: "blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.status(200).json({ message: "Hello from updateblog" });
};

module.exports = {
getBlogs,
getblog,
addblog,
getblog,
deleteblog,
updateblog
};
