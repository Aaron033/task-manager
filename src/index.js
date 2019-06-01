const express = require('express')

const app = express()
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 

app.use(express.json())

//in order to access a http page we must use an http functionality 
app.post('/users', (req, res) => { 
    console.log(req.body)
    res.send('Testing!')
})
//The first argument is the path and the second is the callback


app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})