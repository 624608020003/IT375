//1
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
//2
app.get('/',(req,red)=>{
    res.send('Home page');
});
app.get('/overvive',(req,red)=>{
    res.send('Home page');
});
app.get('/product',(req,red)=>{
        res.send('product page');
});
app.get('/api/user',(req,red)=>{
        const userData = {id:15, name: 'Molei'};
        res.send(userData);
});
//3
  app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to request on port ${port}`);
});
    