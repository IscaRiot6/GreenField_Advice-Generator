const mongoose = require('./connection')

const AdviceSchema = new mongoose.Schema({
  userId: String
})

const Advice = mongoose.model('Advice', AdviceSchema)

module.exports = Advice
