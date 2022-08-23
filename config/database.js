const mongoose = require ("mongoose");




const connectDatabase= () =>{
    mongoose.connect(process.env.MONGO_URL).then((data)=>{
        console.log(`mongoDB connected succesfully on server ${data.connection.host}`);
    })
}

module.exports =connectDatabase;