const csv2json = require('csvtojson')

const csvFile = 'detail.csv'

var csvArray = []
async function getCsv ()  {
    const csvProcessedArray = await csv2json().fromFile(csvFile).then((jsonObj) => {
        for (var i = 0; i < jsonObj.length; i++) {
            var oneRow = {
                name: jsonObj[i]['Name'],
                age: jsonObj[i]['Age'],
                
            };
             csvArray.push(oneRow);
        }
        return csvArray
        
    })
    
   return csvProcessedArray
     
    
}


    
    

// console.log(oneRow)

module.exports = { getCsv }

