
const  { createReadStream } =require('fs');
const { parse } = require('fast-csv');
const Register = require('../models/Formreg');

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
        const reg = new Register({
          ...row
        })
        await reg.save()
        
        
        employees.push(row);
      })
      .on("end", async () => {
        try {
          const formData = await Register.find()
          res.status(200)
            // .send({
            // message: "The file: "
            //  + req.file.originalname
            //  + " got uploaded successfully!!",
            // })
            
            .render('index', {
            employees: formData,
            message: "The file: "
             + req.file.originalname
             + " got uploaded successfully!!",
            })
            
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