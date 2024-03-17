const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const Item = require("../models/items");

const itemsController = require("../controllers/items")

const verifyToken = require('../middleware/authMiddleware');

router.post('/add-item',verifyToken, (req, res, next) => {
  itemsController.setItem(req, res, next)
  })

router.put('/update-item',verifyToken, (req, res, next) => {
  itemsController.update(req, res, next)
  })

router.get("/get-items",itemsController.getItems)

router.get("/get-items-subcategory/:subcategoryId",itemsController.getItemsSubcategory)

router.get("/get-item/:id",itemsController.getItem)

router.delete("/delete-item/:id",verifyToken,(req, res, next) => {
  itemsController.deleteItem(req, res, next)
  })

module.exports = router;
