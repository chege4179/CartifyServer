const mongoose = require('mongoose')


const DATABASE_URI = process.env.REMOTE_DATABASE_URI


mongoose.connect(DATABASE_URI,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('Connected successfully')
})
.catch((err) => {
    console.log(err)
    console.log('Sonething went wrong connecting to the db')
})
const connection = mongoose.connection

connection.on('connected',() => console.log(`Database Connected: ${connection.host}`))
connection.on('disconnected',() => console.log('Database Disconnected'))



module.exports = connection
