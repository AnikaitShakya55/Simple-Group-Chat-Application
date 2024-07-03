// ./routes/chatScreen.js
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.send(`
        <h1>Chat App</h1>
        <h2>Message App</h2>
        <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        action="/chatPage/chatId" method="POST">
        <input type="text" name="message" placeholder="message">
        <input type="hidden" id="username" name="username">
        <br>
        <button type="submit">Send</button>
    `);
});




router.post('/chatId', (req, res, next) => {

    fs.appendFile('message.txt', `${req.body.username}:${req.body.message}\n`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to save message.');
        } else {
            res.redirect('/chatPage'); 
            console.log('Message saved successfully.');
        }
    });
});

module.exports = router;
