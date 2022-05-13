const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const BookStore = require("./models/BookModel");
const authRouter=require('./routes/auth');
const verifyToken = require('./middleware/verifyToken');


const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://ezgi:stardol0001@cluster0.t6r64.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connect"))
    .catch((err) => console.error(err))

 app.use("/auth",authRouter);
// app.use(verifyToken);

app.get('/books', (req, res) =>{
    BookStore.find().then(books=>res.json(books));

})
app.delete('/delete/:id', (req, res) =>{
    const id=req.params.id;
    BookStore.findByIdAndDelete({_id:id},(err)=>{
        
        if(!err){
            console.log("book deleted")
        }else { 
            console.log(err)
        }
    })
})

app.post('/newbook', async (req, res) => {
    try {
        const newBook = new BookStore({
            bookName: req.body.bookName,
            author: req.body.author,
            quantity: req.body.quantity,
            department: req.body.department,
            comments: req.body.comments,
            img: req.body.path
            

        })
        const book = await newBook.save();//Database save 
        res.status(200).json(book);
    } catch (error) {
        console.log(error)
    }
})

app.put('/lend/:id',async (req, res) => {
    try {
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity:-1}})
    } catch (error) {
        console.log("server ok");
    }
})
app.put('/back/:id',async (req, res) => {
    try {
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity:+1}})
    } catch (error) {
        console.log("server ok");
    }
})

app.listen(5000, () => {
    console.log('listening on port');
})





// app.get('/',(req, res) => {
//     res.send("200 ")
// });

// app.get('/haberler',(req, res) => {
//     res.send(`<h1>Haberle<h1/>`)
// })