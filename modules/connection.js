const mongoose = require('mongoose')

main()
  .catch(err => console.log(err))
  .then(() => console.log('mongoDB is connected'))

async function main () {
  mongoose.set('strictQuery', false)
  await mongoose.connect(
    'mongodb+srv://Isca:Isca12345@cluster0.cz4fbfv.mongodb.net/greenfield-adviceGenerator?retryWrites=true&w=majority'
  )
}

module.exports = mongoose
