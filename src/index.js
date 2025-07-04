import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8000,() =>{
    console.log(`Server is Running Port !!!: ${process.env.PORT}`);

  } )

})
.catch((err) => {
  console.log("Mongodb connection failed !!!" ,err);
})








/*
import express from "express"

const app = express()


( async ()=>{
    try{
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)// DATA BASE connect
  app.on("error",(error) => {
    console.log("ERROR" , error)
    throw error
  })
  app.listen(process.env.PORT, () =>{
    console.log(`app is listening on port ${process.env.PORT}`)
  } )

    } catch(error){
        console.error("ERROR", error)
        throw error    
    }
})();*/