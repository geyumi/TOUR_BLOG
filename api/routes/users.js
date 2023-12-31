const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post"); //import the post model
const bcrypt=require("bcrypt");


//UPDATE A USER
router.put("/:id", async (req, res) => {
    if (req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            //to update and set
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your account!");
    }
  });

//DELETE A USER
router.delete("/:id", async (req, res) => {
    if (req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        try { //to delete all the  blogs posted by the user
          await Post.deleteMany({ username: user.username });
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted successfully");
        } catch (err) {
          res.status(500).json(err);
        }
      } catch (err) {
        res.status(404).json("User not found!");
      }
    } else {
      res.status(401).json("You can delete only  in your account!");
    }
  });

  // Delete Account
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     // Check if the user ID in the request matches the authenticated user's ID
//     if (req.body.userId === req.params.id) {
//       const user = await User.findById(req.params.id);
//       if (!user) {
//         return res.status(404).json("User not found");
//       }

//       // Perform any additional cleanup (e.g., deleting user-related data)

//       await user.remove();
//       res.status(200).json("User has been deleted successfully");
//     } else {
//       res.status(401).json("You can delete only your own account");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//   //delete by own 
//   //router.delete("/:id", async (req, res) => {
//     try {
//       await Post.deleteMany({ username: User.username });
//       await User.findByIdAndDelete(req.params.id);
//       //res.status(200).json("User has been deleted successfully");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  //GET USER by ID
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router
