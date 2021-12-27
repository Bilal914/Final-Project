import express from 'express';//creating server
import data from './data.js';
const app=express();
app.get('/api/products',(req,res)=>
{
    res.send(data.products);//send data 
});
app.get('/',(req,res)=>{
    res.send('Server ready');
});
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Server listening...at http://localhost:${port}`);
});