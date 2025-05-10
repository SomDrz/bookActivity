const mongoose = require("mongoose")

const Connection=async()=>{
          await  mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        
        console.log("mongo-DB")
    })
    .catch((err)=>{
        console.log(err)
        process.exit(1);
    })
}
module.exports= {Connection}