const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }).then(() => {
    console.log('Database connected Successfully!')
    }).catch((e) => {
        console.log(`connection fail: ${e}`)
    })

