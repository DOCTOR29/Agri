const flash = require('connect-flash');
const  { createReadStream, rmdir} =require('fs');
const { parse } = require('fast-csv');
const mongoose = require('mongoose')

const upload = async (req, res) => {
    try {
        // console.log("------===========-------",req
        // )

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
       
        const reg = new  mongoose.model(req.file.fieldname)  ({
          ...row
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
          res.redirect("/" + req.file.fieldname.toLowerCase())
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