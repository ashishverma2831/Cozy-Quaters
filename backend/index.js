const express = require('express');
const cors = require('cors');


// User Routers

// Initialize express
const app = express();
const port = 5000;

// Middlewares
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}));


// Starting the Server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})


// Routes
app.get('/',(req,res)=>{
    res.send('Response from the express server')
})