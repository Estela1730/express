const express = require('express')
const app = express()
const port = 3006

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Ejemplo de como hacer un express' ${port}`)
})