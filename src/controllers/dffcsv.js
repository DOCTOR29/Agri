const flash = require('connect-flash');
const  { createReadStream } =require('fs');
const { parse } = require('fast-csv');
const DFF = require('../models/modelDFFarmers');

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      console.log(req)
      return res.status(400).send("Please upload a CSV file!");
    }

    let employees = [];
    let path = "./resources/static/assets/uploads/" + req.file.filename;

    createReadStream(path)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", async (row) => {
        // console.log(row)
        const reg = new DFF({
          dateOfDisbursement: row['Date Of Disbursement'],
          AAPRTDistrict: row['AAPRT District'],
          APARTBlock: row['APART Block'],
          nameOfFarmer: row['Name Of Farmer'],
          whetherAssociatedWithFPOFPC: row['Whether Associated With FPO/FPC'],

          
            nameOfFPOFPC: row[ "Name Of FPO/FPC"],
          CINOfTheFPC: row["CIN Of The FPC"],
            
          guaranteeProvidedByFPOFPC: row[ "guarantee Provided By FPOFPC" ],
          loanAmount: row[ "Loan Amount" ], 
          tenure: row[ "Tenure" ], 
          whetherLoanTakenForFirstTime: row[ "Whether Loan Taken For First Time"], 
          valueChain: row[ "Value Chain"]
        })
        await reg.save()
        
        
        employees.push(row);
      })
      .on("end", async () => {
        try {
          // const formData = await Register.find()
          

          req.flash("message", "The file: "
          + req.file.originalname
          + " got uploaded successfully!!",);
          res.redirect('/dff')
            //   , {
          
            // })
            
            // .render('DehaatFinancingFarmers', {
            // employees: 'formData',
            // message: "The file: "
            //  + req.file.originalname
            //  + " got uploaded successfully!!",
            // })
            
        } catch (error) {
          res.status(500).send({
            message: "Couldn't import data into database!",
            error: error.message,
          });
        }
        
      
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Failed to upload the file: " + req.file.originalname,
    });
  }
};

module.exports = {
    upload

  };