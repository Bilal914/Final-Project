import express from 'express';//creating server
import data from './data.js';
import data1 from './dataChildren.js';
import dataa from './datawomen.js';

const app = express();


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(505).send({message:'Product not found'});
    }
});
app.get('/api/productschildren', (req, res) => {
    res.send(data1.productsss);//send data 
});
app.get('/api/products', (req, res) => {
    res.send(data.products);//send data 
});
app.get('/api/productswomen', (req, res) => {
    res.send(dataa.productss);//send data 
});



app.get('/', (req, res) => {
    res.send('Server ready');
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening...at http://localhost:${port}`);
});