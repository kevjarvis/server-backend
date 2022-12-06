const express = require('express');
const { Container } = require('./Container');

const app = express()

const FILENAME = './productos.txt'
const products = new Container(FILENAME)

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API')
})

app.get('/productos', async (req, res) => {
  res.send(await products.getAll())
})

app.get('/productoRandom', (req, res) => {
  res.send(products.pickRandom())
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log(`Se ha inicializado el servidor en el puerto ${PORT}`);
})

server.on('error', (error) => {
  console.log(`Ha ocurrido un error en el servidor ${error}`);
})
