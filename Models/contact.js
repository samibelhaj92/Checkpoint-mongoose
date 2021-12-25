const mongoose=require('mongoose')


const ContactSchema= new mongoose.Schema({
    name: {type: String,
        required: true},
    age: Number,
    email: {type: String,
            required: true,
            unique: true                                           
    },
    favoriteFoods: [String]
})

module.exports=mongoose.model('Contact', ContactSchema)