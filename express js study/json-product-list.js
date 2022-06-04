const express = require('express')
const app = express()
//add curly brackets to make it a function
const { products } = require('./data')

//tells to go to the provided link
app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">product list</a>')
})

//codes the provided link
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product
        return {id, name, image}
    })
    res.json(newProduct)
})


app.listen(5000, () => {
    console.log('server is listening')
})