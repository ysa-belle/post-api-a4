const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3003;

//config
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//connect to mongoose
mongoose.connect("mongodb+srv://ysabelle:Dexter26@cluster0.crbrb.mongodb.net/cardsDB")


//data scheme
const cardSchema ={
    title: String,
    content: String,
    image: String
}

//data model
const Card = mongoose.model("Card", cardSchema);

//read route
app.get("/cards", (req, res) => {
    Card.find()
        .then((cards) => res.json(cards))
        .catch((err) => res.status(400).json("Error: " + err));
});

//create route
app.post('/create', (req, res) => {
    const newCard = new Card (
        {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image
        });
    newCard
        .save()
        .then((card) => console.log(card))
        .catch((err) => res.status(400).json("error " + err));
})

//delete route
app.delete("/delete/:id",(req, res) => {
    const id = req.params.id;

    Card.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
            console.log("card deleted");
        } else {
            console.log(err);
        }

});
});

app.listen(port, function () {
    console.log("express server is running on port 3003");
})