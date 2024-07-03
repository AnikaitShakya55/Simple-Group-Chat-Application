const express = require('express');
const router =express.Router();


router.get('/',(req,res,next)=>{
    return res.send(`
      
    <h1>Login Page </h1>

    <form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/loginId" method="POST">
    <input id="username" type="text" name="title" placeholder="username">
    <br>
    <button type="submit">Login</button>
    </form>`
);
})


router.post('/loginId',(req,res,next)=>{
    res.redirect('/chatPage')
})


module.exports = router;