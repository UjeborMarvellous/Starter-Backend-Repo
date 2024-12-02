const express = require('express')

const app = express()

// app.get(route, callback (req , res))

//Creating a Routing Pratical
// app.get('/' , (req , res) =>{
//     res.send('Hello World My First Created server')
// })

// app.get('/name' , (req , res) => {
//     res.send('And this is how to route between pages❤️')
// })

// app.listen(8000 , () =>{
//     console.log('Port running on 8000')
// })

//Creating a Middleware
 
let name = "Mark"
let password = 1234569

app.get('/' , (req , res) =>{
    res.send('This is Login Page')
}) //Login page

app.use(loginMiddleware)

app.get('/profilePage' , (req , res) => {
    res.send('And this is Profile pages❤️')
}) //Profile Page 

app.get('/FeedPage' , (req , res) => {
    res.send('And this is Feed pages❤️')
}) // Feed Page

app.listen(8000 , () =>{
    console.log('Port running on 8000')
})


// Creating a Middleware
function loginMiddleware (req , res, next){
    if(name == "Mark" && password == 123456789){
        next()
    }
    else{
        res.send('No Credentials Found Try Again')
    }
}