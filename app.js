const express = require ('express')
const app = express()
const PORT = 3000

const db =require('./models/index')

app.get('/home', (_, res) => {
    console.log('db', db.produto);
    res.send('Hello world')
})

app.get('/produto', async (_, res) => { 
    try {
        const products = await db.Product.findAll();
         return res.send(products)
    } catch(error) {
     res.send('Deu algum BO na busca');
    }
})
       

app.listen(PORT, () => {console.log('server is runnig')})