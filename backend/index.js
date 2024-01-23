const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Initialize express
const app = express();
const port = 5000;

// database connection
const url = 'mongodb+srv://root:root@cluster0.ve2kz8r.mongodb.net/cozyquarters?retryWrites=true&w=majority';
mongoose.connect(url)
.then((result) => {
    console.log('Mongoose Connected');
}).catch((err) => {
    console.log(err);
});


// User Routers
const UserRouter = require('./routers/userRouter')
const FeedbackRouter = require('./routers/feedbackRouter')
const ContactRouter = require('./routers/contactRouter')

// Middlewares
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use('/user',UserRouter)
app.use('/feedback',FeedbackRouter)
app.use('/contact',ContactRouter)





// Starting the Server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

// Routes
app.get('/',(req,res)=>{
    res.send('Response from the express server')
})