// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/login');
const chatRouter = require('./routes/chatScreen');

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));

// Routes setup
app.use('/', loginRouter); 
app.use('/chatPage', chatRouter); 

app.listen(3000, () => {
    console.log(`Server is running`);
});
