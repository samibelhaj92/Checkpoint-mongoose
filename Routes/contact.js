const express = require('express')
const { addContact, getContacts, getOneContact, updateContact, deleteContact } = require('../Controlers/contact')
const ContactSchema = require('../models/contact')

const ContactRoute = express.Router()

// method post
// req.body
// path /addContact

ContactRoute.post('/addContact', addContact)

// method get 1/2 (get all)
// path /

ContactRoute.get('/', getContacts)

// method get 2/2 (get one by id)
// req.params
// path /:id

ContactRoute.get('/:id', getOneContact)

// method put
// req.params req.body
// path /updateContact/:id

ContactRoute.put('/updateContact/:id', updateContact)

// method delete
// req.params
// path /deleteContact/:id

ContactRoute.delete('/deleteContact/:id', deleteContact)

module.exports=ContactRoute