const mongoose=require('mongoose')
const mongo=process.env.MONGODB_URI
const connectToDb= async()=>{
    try{
       await mongoose.connect(mongo)
        console.log('database connected successfully')
    }catch(e){
        console.log(e,'cannot connect to db now')
    }
}
// const connectToDb=()=>{
// mongoose
// .connect(mongo)
// .then(()=>console.log('mongodb connected successfully'))
// .catch((e)=>console.log(e,'cannot connect to db now'))
// }

module.exports=connectToDb;