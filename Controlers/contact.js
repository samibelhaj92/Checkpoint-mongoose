const ContactSchema = require('../models/contact')

// method post
// req.body
// path /addContact

exports.addContact= async (req,res)=> {
    const {email}=req.body    
        try {
            const newContact = new ContactSchema(req.body)
    
            const found = await ContactSchema.findOne({email})
            if (found) {return res.status(400).send(`${email} is already exists`)}
    
            await newContact.save()
    
            res.status(200).send({msg:'contact added', newContact})
    
        } catch (error) {
            res.status(500).send('could not add contact')
        }
    }

    // method get 1/2 (get all)
    // path /

exports.getContacts= async (req, res)=> {
    
    try {
        const contacts= await ContactSchema.find()
        res.status(200).send({msg:'list of contacts', contacts})

    } catch (error) {
        res.status(500).send('could not get contacts')
    }
}

// method get 2/2 (get one by id)
// req.params
// path /:id

exports.getOneContact= async (req,res)=>{
    const {id}= req.params
    try {
        const foundContact = await ContactSchema.findById(id)
        res.status(200).send({msg:'contact found', foundContact})
    } catch (error) {
        res.status(500).send(`could not get ${id}`)
    }
}

// method put
// req.params req.body
// path /updateContact/:id

exports.updateContact= async (req,res)=>{
    const {id}= req.params
    try {
        const updated= await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({msg:'contact updated', updated})
    } catch (error) {
        res.status(500).send(`could not update ${id}`)
    }
}

// method delete
// req.params
// path /deleteContact/:id

exports.deleteContact= async (req,res)=>{
    const {id}=req.params
        try {
            const deleted= await ContactSchema.findByIdAndDelete(id)
            res.status(200).send({msg:'contact deleted', deleted})
        } catch (error) {
            res.status(500).send('could not delete contact')
        }
    }