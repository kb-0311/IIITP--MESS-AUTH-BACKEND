const app=require('./app');
const connectDatabase = require ("./config/database");
const dotenv = require("dotenv");

dotenv.config({path:"./config/config.env"})

connectDatabase();


const server = app.listen(process.env.PORT , () =>{

    console.log(`server started on port ${process.env.PORT}`);

})
// Uncaught Exception 
process.on("uncaughtException" , (err)=> {
    console.log(err.message);
    console.log("server shutting down" );
    server.close(()=>{
        process.exit(1);
    });
})

// Unhandled Promise errors
process.on("unhandledRejection" , (err)=> {
    console.log(err.message);
    console.log("server shutting down" );
    server.close(()=>{
        process.exit(1);
    });
})