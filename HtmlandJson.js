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
let password = 123456789

app.get('/' , (req , res) =>{
    res.write('<h1>This is the Login screen </h1>')
    res.write('<h1>This is the Login screen 3</h1>')
    res.send()
}) //Login page

app.use(loginMiddleware)

app.get('/profilePage' , (req , res) => {
    res.json([
        {
            firstName : "Marvellous",
            lastName : "Ujebor"
        },
        {
            firstName : "Sam",
            lastName : "Mark"
        }
    ])
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
