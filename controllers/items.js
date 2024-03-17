
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Item = require('../models/items')

exports.setItem = async (req,res,next) => {
    const itemData = {
        "name" : req.body.name,
        "subcategoryId" : req.body.subcategoryId,
        "description" : req.body.description,
        "price" : req.body.price,
        "priority" : req.body.priority
    }

    try {
        const item = await Item.saveItem(itemData)

        res.status(201).json({message:"Item added successfully!"})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}

exports.update = async (req,res,next) => {
    const itemData = {
        "iditems": req.body.iditems,
        "name" : req.body.name,
        "subcategoryId" : req.body.subcategoryId,
        "description" : req.body.description,
        "price" : req.body.price,
        "priority" : req.body.priority
    }

    try {
        const item = await Item.updateItem(itemData)

        res.status(201).json({message:"Item updated successfully!"})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}

exports.getItems = async (req,res,next) => {

    try {
        const items = await Item.getAll()

        res.status(201).json({message:"", data: items[0]})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}

exports.getItem = async (req,res,next) => {
    var id = req.params.id

    try {
        const item = await Item.findItem(id)

        res.status(201).json({message:"", data: item[0]})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}

exports.getItemsSubcategory = async (req,res,next) => {
    var subcategoryId = parseInt(req.params.subcategoryId)
    console.log(subcategoryId)
    try {
        const items = await Item.getItemsBySubCategory(subcategoryId)

        res.status(201).json({message:"", data: items[0]})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}

exports.deleteItem = async (req,res,next) => {
    var id = req.params.id
    try {
        const items = await Item.deleteItem(id)

        res.status(201).json({message:"Item deleted"})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}

