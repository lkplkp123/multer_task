const mongoose=require('mongoose')


module.exports=()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:27017/upload-files-database',{
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>console.log('connected to mongodb......'))
}