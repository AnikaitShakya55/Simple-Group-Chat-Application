// ./routes/chatScreen.js
const express = require('express');
const fs = require('fs');
const router = express.Router();

// GET request handler for the chat page
router.get('/', (req, res, next) => {
    res.send(`
        <h1>Chat App</h1>
        <form action='/chatPage/chatId' method='POST'
        >
            <input type='text' id="message" name='message' placeholder='Enter a message' />
            <button type='submit'>Send</button>
        </form>
    `);
});

router.post('/chatId', (req, res, next) => {
   
    fs.appendFile('message.txt', `${req.body.message}`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to save message.');
        } else {
            console.log('Message saved successfully.');
            res.redirect('/chatPage'); 
        }
    });
});

module.exports = router;
