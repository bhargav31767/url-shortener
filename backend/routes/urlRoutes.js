const express = require("express");
const router = express.Router();

const Url = require("../models/Url");
const { nanoid } = require("nanoid");

router.post("/shorten", async (req, res) => {
  try {
    const { url } = req.body;

    const shortCode = nanoid(6);

    const newUrl = new Url({
      originalUrl: url,
      shortCode: shortCode
    });

    await newUrl.save();

    res.json({
      shortUrl: `http://localhost:5000/${shortCode}`
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/:shortCode", async (req, res) => {
  try {
    const url = await Url.findOne({
      shortCode: req.params.shortCode
    });

    if (!url) {
      return res.status(404).json({
        message: "URL not found"
      });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/analytics/all", async (req, res) => {
  try {
    const urls = await Url.find();

    res.json(urls);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;