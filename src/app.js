const express = require('express');
const path = require('path')
require('./db/conn.js');
const csvupload = require('./controllers/csvupload.js')
const Register = require('./models/Formreg.js')
const hbs = require('hbs');
const bodyParser = require('body-parser');

const  { createReadStream } = require( 'fs');
const { parse } = require( 'fast-csv');
const json2csv = require('json2csv').parse 
const multer = require('multer')
const uploadFile = require('./middleware/upload.js');
const csvController = require('./controllers/csv.controller.js');
const csvPath = path.resolve(__dirname, '../formData', 'agridb.csv')
const csvPathtxt = path.join(__dirname, '../formData/agridb.csv')

// const upload = multer({
    
    // limits: {
    //     fileSize: 1000000,

    // },
    // fileFilter(req, file, cb) {
    //     if (!file.originalname.match(/\.(csv)$/)){
    //         return cb(new Error('Please upload a csv file'))
    //     }
    //     cb(undefined, true)
    // }
// })



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
            employees: formData,message: '' }) 
            
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

        const fields = [{ label: "Name", value: 'Name' },
                        { label: "Age", value: 'Age' }]
        const csv = json2csv(formData, { fields })

       
        res.attachment('details.csv').send(csv)
        // res.status(200).download(csvPathtxt,'agridb.csv')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
    
})
//upload csv

app.post('/csvform', uploadFile.single('file'), csvController.upload);


app.get('*', (req, res) => {
    res.send("error")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})