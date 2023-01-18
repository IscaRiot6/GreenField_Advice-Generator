const express = require('express')
// const mongoose = require('mongoose')
const app = express()
const port = 6000
const bcrypt = require('bcrypt')

const User = require('./modules/userModule')
const Advice = require('./modules/adviceModule')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.post('/signup', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.send({ message: 'Please fill-in the correct data' })
  } else {
    let user = await User.findOne({ username: req.body.username })
    if (user) {
      res.send({ message: 'This user already exists' })
    } else {
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (hash) {
          let newUser = new User({
            username: req.body.username,
            password: hash
          })
          await newUser.save()
          res.send({ message: true })
        } else {
          console.log(err)
          res.send({ message: false })
        }
      })
    }
  }
  console.log(req.body)
})

app.post('/login')

app.listen(port, () => {
  console.log(`server is connected on port : ${port} `)
})
