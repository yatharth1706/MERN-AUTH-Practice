const express = require('express')
const router = express.Router()

/** Item model */
const Item = require('../../models/Item')

/**
 * @route GET api/items
 * @desc Get all items
 * @access Public
 */

router.get('/', (req, res) => {
    Item.find().sort({ date : -1 }).then((items) => res.json(items))
})

/**
 * @route POST api/items
 * @desc Create a new item
 * @access Public
 */

router.post('/', async (req, res) => {
    const item = new Item({
        name : req.body.Name
    })
    const newItem = await  item.save()
    return res.json(newItem)
})

/**
 * @route DELEte api/items
 * @desc Deletes a new item
 * @access Public
 */

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then((item) => item.remove().then(() => res.json({success : true}))).catch((err) => res.status(404).json({success:false}))
})

module.exports =  router

