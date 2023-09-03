const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path')
require('./db/conn.js');
const Register = require('./models/Formreg.js')
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(staticPath));
app.set('view engine', 'ejs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

app.get('/', async (req, res) => {
    try {
        const formData = await Register.find()
        res.render('index', {
            employees: formData }) 
    } catch (error) {
        res.status(500).send()
        console.log(error)
    }
    
   
})


app.post('/add/form', async (req, res) => {
    try {
        
        
        const regForm = new Register({
            ...req.body
        })
        await regForm.save();
      

        res.redirect('/')
        // console.log(regForm)
        const formData = await Register.find()

        res.status(201).render("index",{
            employees: formData });
        const number = req.body.number 
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})
app.get('/api/data', async (req, res) => {
    try {
        const formData = await Register.find()
        res.send(formData)
    } catch (error) {
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})