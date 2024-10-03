const express = require('express')
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const player = require('./model/usserSChema');
const testmiddleare = require('./middleare/testmiddleare');
const app = express()
const port = 3000
app.use(express.json())
mongoose.connect('mongodb+srv://apurbadassourav:1831511850@uselist.8ny8i.mongodb.net/userlist?retryWrites=true&w=majority&appName=uselist')
  .then(() => console.log('Connected!'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user', (req, res) => {
//   console.log(req.body)
const{firstname, lastname, email, password}=req.body
var token = jwt.sign({ id:email }, 'apurba');
console.log(token,'token')

bcrypt.hash(password, 10, function(err, hash) {
    const user=new player({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:hash
    })
    user.save()
      res.send(user)
});
})
app.get('/user',testmiddleare, async(req, res) => {
    const username = await player.find({})
    res.send(username)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})