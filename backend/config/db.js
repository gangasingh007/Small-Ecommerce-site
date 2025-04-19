const { default: mongoose } = require("mongoose")

const Dbconnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("The data base has been connected")
        console.log(process.env.MONGO_URI)
    } catch (error) {
        console.log("There was an error connecting the database",error)
    }
}

module.exports = Dbconnect;