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
const GGSRouter = require('./routers/GGSRouter')
const GGFPORouter = require('./routers/GGFPORouter')
const GGERouter = require('./routers/GGERouter')
const GGCIRouter = require('./routers/GGCIRouter')
const GGCFRouter = require('./routers/GGCFRouter')
const GGCCRouter = require('./routers/GGCCRouter')
const GoGreenRouter = require('./routers/GoGreenRouter')
const STRouter = require('./routers/STRouter')
const SMLRouter = require('./routers/SMLRouter')
const SDFRouter = require('./routers/SDFRouter.js')
const SCFRouter = require('./routers/SCFRouter')
const MTRouter = require('./routers/MTRouter.js')
const MBRouter = require('./routers/MBRouter.js')
const MDRouter = require('./routers/MDRouter.js')
const MCRouter = require('./routers/MCRouter.js')
const MBSRouter = require('./routers/MBSRouter.js')
const ESAFRouter = require('./routers/ESAFRouter.js')
const samRouter = require('./routers/SAMRouter.js')
const dummyDash = require('./routers/dummyDash.js')
const samdash = require('./routers/samdash.js')
const SDiFRouter = require('./routers/SDiFRouter.js')
const SCVRouter = require('./routers/SCVRouter.js')
const SCFPRouter = require('./routers/SCFPRouter.js')
const SAMRouter = require('./routers/SAMRouter.js')
const EAPYRouter = require('./routers/EAPYRouter.js')
const RCRouter = require('./routers/RCRouter')
const RPPRouter = require('./routers/RPPRouter')
const dashRangdeRouter = require('./routers/dashRangdeRouter')
const VWRouter = require('./routers/VWRouter')
const VIRouter = require('./routers/VIRouter')
const VFTRouter = require('./routers/VFTRouter')
const VCRouter = require('./routers/VCRouter')
const VBSRouter = require('./routers/VBSRouter')
const VDashRouter = require('./routers/VDashRouter')





const app = express();

const port = process.env.PORT
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
// app.set('trust proxy', 1);

app.use(flash());
app.use(session({
    secret: 'secret key',
    saveUninitialized: true,
    resave: true


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
app.use(GGSRouter)
app.use(GGFPORouter)
app.use(GGERouter)
app.use(GGCIRouter)
app.use(GGCFRouter)
app.use(GGCCRouter)
app.use(GoGreenRouter)
app.use(STRouter)
app.use(SMLRouter)
app.use(SDFRouter)
app.use(SCFRouter)
app.use(MTRouter)
app.use(MDRouter)
app.use(MBRouter)
app.use(MCRouter)
app.use(ESAFRouter)
// app.use(samRouter)
app.use(dummyDash)
app.use(samdash)
app.use(MBSRouter)
app.use(SDiFRouter)
app.use(SCVRouter)
app.use(SCFPRouter)
app.use(SAMRouter)
app.use(EAPYRouter)
app.use(RCRouter)
app.use(RPPRouter)
app.use(dashRangdeRouter)
app.use(VWRouter)
app.use(VIRouter)
app.use(VFTRouter)
app.use(VCRouter)
app.use(VBSRouter)
app.use(VDashRouter)

app.get('/ui', (req, res) => {
    res.render('index2')
})

app.get('*', (req, res) => {
    res.send("error")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})