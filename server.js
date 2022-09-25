const dotenv = require("dotenv");
const app = require("./app");
const { Mongoose } = require("mongoose");

process.on("uncaughtException", err =>{
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(`caught this at ${err}`)
    process.exit(1)
})

dotenv.use({path: "./config.env"})


const db = process.env.DATABASE.replace(
    'password',
process.env.DATABASE_PASSWORD
)

Mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify : true
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server lighting on port ${3000}`)
})