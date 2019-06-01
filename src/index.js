const express = require('express')

const app = express()
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 

app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})