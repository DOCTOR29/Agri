const express = require('express');
const path = require('path')
const { default: millify } = require("millify");

require('./db/conn.js');
const DCRouter = require('./routers/DCRouter.js')

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
const samRouter = require('./routers/SAMRouter.js')
const SDRouter = require('./routers/SDRouter.js')
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
const FTRouter = require('./routers/FTRouter')
const FSRouter = require('./routers/FSRouter')
const FORouter = require('./routers/FORouter')
const FIRouter = require('./routers/FIRouter')
const FCRouter = require('./routers/FCRouter')
const FARouter = require('./routers/FARouter')
const FIAdashRouter = require('./routers/FIAdashRouter')
const ETRouter = require('./routers/ETRouter')
const EERouter = require('./routers/EERouter')
const EBRouter = require('./routers/EBRouter')
const EFRouter = require('./routers/EFRouter')
const EFPRouter = require('./routers/EFPRouter')
const EGRouter = require('./routers/EGRouter')
const EIRouter = require('./routers/EIRouter')
const EARouter = require('./routers/EARouter')
const EBRRouter = require('./routers/EBRRouter')
const ECSPRouter = require('./routers/ECSPRouter')
const EDashRouter = require('./routers/EDashRouter')
const ESCOIRouter = require('./routers/ESCOIRouter')
const ESCODashRouter = require('./routers/ESCODashRouter')
const IORouter = require('./routers/IORouter')
const ICRouter = require('./routers/ICRouter')
const ISRouter = require('./routers/ISRouter')
const IARouter = require('./routers/IARouter')
const ITRouter = require('./routers/ITRouter')
const IDashRouter = require('./routers/IDashRouter')
const aggregateRouter = require('./routers/aggregateRouter')
const aggregatemRouter = require('./routers/aggregatemRouter')
const aggregate1Router = require('./routers/aggregate1Router')
const aggregate1mRouter = require('./routers/aggregate1mRouter')

const RFORouter = require('./routers/RFORouter');
const RFERouter = require('./routers/RFERouter');
const RACRouter = require('./routers/RACRouter');
const RNBRouter = require('./routers/RNBRouter');
const MORouter = require('./routers/MORouter');
const SIRRouter = require('./routers/SIRRouter');
const IIRouter = require('./routers/IIRouter');
const ICCRouter = require('./routers/ICCRouter');
const DFSFRouter = require('./routers/DFSFRouter');
const XGRouter = require('./routers/XGRouter');






const app = express();
app.locals.millify = millify;
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
app.use(DCRouter)

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
app.use(ESCODashRouter)
app.use(IORouter)
app.use(IARouter)
app.use(ITRouter)

app.use(samRouter)

app.use(MBSRouter)
app.use(SDRouter)
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
app.use(FTRouter)
app.use(FSRouter)
app.use(FORouter)
app.use(FIRouter)
app.use(FCRouter)
app.use(FARouter)
app.use(FIAdashRouter)
app.use(ETRouter)
app.use(EERouter)
app.use(EBRouter)
app.use(EFRouter)
app.use(EFPRouter)
app.use(EGRouter)
app.use(EIRouter)
app.use(EARouter)
app.use(EBRRouter)
app.use(ECSPRouter)
app.use(EDashRouter)
app.use(ESCOIRouter)
app.use(ICRouter)
app.use(ISRouter)
app.use(IDashRouter)
app.use(aggregateRouter)
app.use(aggregate1Router)
app.use(aggregatemRouter)
app.use(aggregate1mRouter)
//range
app.use(RFORouter);
app.use(RFERouter);
app.use(RACRouter);
app.use(RNBRouter);

//mbs
app.use(MORouter);
app.use(SIRRouter);
app.use(IIRouter);
app.use(ICCRouter);
app.use(DFSFRouter);
app.use(XGRouter);


app.get('/ui', (req, res) => {
    res.render('index2')
})
app.get('/dummy', (req, res) => { 
    const donut1 = {
        male: 1,
        female: 4,

    }
    const donut2 = {
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: "NA"
    }
    const donut3 = {
        data1: 33,
        data2: 44,
        name1: 'Ratio of Value of Credit to FPO',
        name2: 'Value of credit to individual farmers'
    }
    const data = {
        card1:487,
        card2:1874000,
        card3:0,
        card4:0,
        card5:0,
        card6:0,
        card7:360,
        card8:1700000,
        card9:0,
        card10:0,
        card11:0,
        card12: 0,
        dashName: 'Go Green'
    }
    res.render('dummydash', {
        donut1, donut2, donut3, data 
        })
})
app.get('*', (req, res) => {
    res.send("error")
})


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})