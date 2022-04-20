const express = require("express");
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
      res.send('Hello World Wellcome to bd')
})


const users = [
  {
    id: 1,
    name: "Rokib",
    email: "mdrokhasan231185@gmail.com",
    phone: "01943047693",
  },
  {
    id: 2,
    name: "nurru",
    email: "nurru231185@gmail.com",
    phone: "01943047693",
  },
  {
    id: 3,
    name: "Shikib",
    email: "Shikib231185@gmail.com",
    phone: "01943047693",
  },
  {
    id: 4,
    name: "JoySheikh",
    email: "JoySheikh231185@gmail.com",
    phone: "01943047693",
  },
  {
    id: 5,
    name: "Habib",
    email: "Habib231185@gmail.com",
    phone: "01943047693",
  },
  {
    id: 6,
    name: "Milon",
    email: "Milon231185@gmail.com",
    phone: "01943047693",
  },
];


app.get('/users', (req, res) => {
      if (req.query.name) {
            const search = req.query.name
            const matched = users.filter(user => user.name.toLowerCase().includes(search)) 
         res.send(matched)  
      }
      else {
            
            res.send(users)
      }
})

app.get('/user/:id', (req, res) => {
      console.log(req.params)
      const id = req.params.id
      const user = users.find(u => u.id === id)

      res.send(user)
})

app.post('/user', (req, res) => {
      console.log("request", req.body)
      const user = req.body
      user.id = users.length + 1
      users.push(user)
      res.send(user)
})

app.listen(port, () => {
      console.log('Example app lisiting on port', port)
})