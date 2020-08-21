//1
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
//it
const itStudents = [
    {id:61, name:'M'},
    {id:62, name:'A'}
];
//ce
const ceStudents = [
    {id:61, name:'Y'},
    {id:62, name:'O'}
];
//mojor
const allMajors = {
    'it': itStudents,
    'ce': ceStudents
};
//routel
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if (major=='it'){
        const jsonString = JSON.stringify(itStudents);
        req.myobj = jsonString;
        next();
    }else if (major=='ce'){
        const jsonString = JSON.stringify(ceStudents);
        req.myobj = jsonString;
        next();
    }else{
        res.send('Major not found!!!');
    }
},(req,res)=>{
    red.myopj += `End of  Data`;
    res.send(req.myobj);      
});
//3
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to request on port ${port}`);
});