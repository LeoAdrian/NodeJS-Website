var mongoose=require("mongoose");

// SCHEMA SETUP
var campgroundsSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description:String,
    location: String,
    lat: Number,
    lng: Number,
    createdAt: { type: Date, default: Date.now},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String,
        number: Number,
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
        ]
})

module.exports = mongoose.model("Campground", campgroundsSchema);