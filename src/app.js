const express = require('express');
const path = require('path')
require('./db/conn.js');
const Register = require('./models/Formreg.js')
const DFF = require('./models/modelDff.js')
const hbs = require('hbs');
const json2csv = require('json2csv').parse 
const DFFRouter = require('./routers/DFFRouter.js')
const DFSRouter = require('./routers/DFSRouter.js')
const uploadFile = require('./middleware/upload.js');
const csvController = require('./controllers/dffcsv.js');
const flash  = require('connect-flash')
const session = require('express-session');




const app = express();

const port = process.env.PORT
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.use(flash());
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false
  }));
  
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

//DFF
app.use(DFFRouter)

//DFS
app.use(DFSRouter)



app.get('*', (req, res) => {
    res.send("error")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})