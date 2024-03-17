const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const Category = require("../models/categories");

const categoriesController = require("../controllers/categories")


module.exports = router;
