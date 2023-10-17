const router = require("express").Router();
const Catogory = require("../models/Catogory");

router.post("/", async (req, res) => {
  const newCat = new Catogory(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/categories", async (req, res) => {
    try {
      const cats = await Catogory.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;