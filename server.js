const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express()
const port=process.env.PORT ||3000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname)
const viewsPath = path.join(__dirname)
const partialsPath = path.join(__dirname)
const psearch =require('./utkarsh_teting')
// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index1');
})


app.get('/download', (req, res) => {
  

    psearch((error, res1) => {
        if (error) {
            res.send(
                {
                "error":"error occured"
                }
             
            )
            return console.log({error})
          
        }
console.log(res1);
 console.log(typeof(res1));
 res.send(res1);
    })



})







app.listen(port, () => {
    console.log('Server is up on port'+port)
})
