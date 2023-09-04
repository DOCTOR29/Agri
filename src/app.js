const express = require('express');
const path = require('path')
require('./db/conn.js');
const {Register, Csvbuff} = require('./models/Formreg.js')
const hbs = require('hbs');
const bodyParser = require('body-parser');
const fs = require('fs')
const json2csv = require('json2csv').parse 

const csvPath = path.resolve(__dirname, '../formData', 'agridb.csv')
const csvPathtxt = path.join(__dirname, '../formData/agridb.csv')




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
        formData = await Register.find()
        
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
        res.status(200).send(formData)
        // console.log(formData.json())
       
    } catch (error) {
        res.status(500).send()
    }
})

app.get('/form', async (req, res) => {
    try {
        const formData = await Register.find()

        const fields = [{ label: "Name", value: 'name' },
                        { label: "Age", value: 'age' }]
        const csv = json2csv(formData, { fields })

        // fs.writeFile(csvPath, csv, (err) => {
        //     if (err) throw new Error('canno save csv',err)
        //     console.log('csv saved successfully')

        // })
        // const buffCsv = csv.toBuffer()
        // const newcsv = new Csvbuff({
        //     csv
        // })
        // await newcsv.save()
        res.attachment('details.csv').send(csv)
        // res.status(200).download(csvPathtxt,'agridb.csv')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
    
})

app.get('*', (req, res) => {
    res.send("error")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})