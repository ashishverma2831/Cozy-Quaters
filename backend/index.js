const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize express
const app = express();
const port = 5000;
console.log(process.env.MONGO_DB_URI);
// database connection
// const url = 'mongodb+srv://root:root@cluster0.ve2kz8r.mongodb.net/cozyquarters?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_DB_URI || port)
.then((result) => {
    console.log('Mongoose Connected');
}).catch((err) => {
    console.log(err);
});


// User Routers
const UserRouter = require('./routers/userRouter')
const FeedbackRouter = require('./routers/feedbackRouter')
const ContactRouter = require('./routers/contactRouter')
const AddRoomRouter = require('./routers/addRoomRouter')
const RequestRouter = require('./routers/requestRouter')
const utilRouter = require('./routers/util')

// Middlewares
app.use(express.json());
app.use(cors({
    // origin:'http://localhost:5173'
    // origin:'https://cozy-quaters.onrender.com/'
    origin:'https://cozy-quaters.vercel.app/'
}));
app.use('/user',UserRouter)
app.use('/feedback',FeedbackRouter)
app.use('/contact',ContactRouter)
app.use('/add-room',AddRoomRouter)
app.use('/cities/:city/:id',RequestRouter)
app.use('/util',utilRouter)
app.use('/uploads',express.static('uploads'))


// Starting the Server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

// Routes
app.get('/',(req,res)=>{
    res.send('Response from the express server')
})