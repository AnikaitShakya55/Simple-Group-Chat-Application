const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send(`
          
         <h1> Chat App </h1>
        <form action='/' method='POST'
          
        >

            <input type='text' name='message' placeholder='enter a message' />
            <input type='hidden' name='username' id='username' />
            <button type='submit' >Send</button>

        </form>`
    )
})


module.exports = router;