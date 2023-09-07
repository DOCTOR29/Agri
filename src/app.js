const express = require('express');
const path = require('path')
require('./db/conn.js');
const DFFRouter = require('./routers/DFFRouter.js')
const DFSRouter = require('./routers/DFSRouter.js')
const DBRouter = require('./routers/DBRouter.js')
const DFRouter = require('./routers/DFRouter.js')
const DIRouter = require('./routers/DIRouter.js')
const DTRouter = require('./routers/DTRouter.js')
const flash  = require('connect-flash')
const session = require('express-session');
const dashRouter = require('./routers/dashRouter')



const app = express();

const port = process.env.PORT
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')


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

//Routers
app.use(DFFRouter)
app.use(DFSRouter)
app.use(dashRouter)
app.use(DBRouter)
app.use(DFRouter)
app.use(DIRouter)
app.use(DTRouter)


app.get('*', (req, res) => {
    res.send("error")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})