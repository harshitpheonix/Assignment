const express = require("express");
// import express from "express";

const router = express.Router();
const controller = require("../controllers");

router.post("/", controller.createReport);
router.get("/",controller.fetchReport);

module.exports= router;