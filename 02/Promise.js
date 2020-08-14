const p = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            //resolve({id:1,"name":"Molei"});
            reject(new Error('Error 404 Bad Request'));
        },2000);
});
console.log('Before Asynchronous operation');
p.then((result)=>{
    console.log('This is result: ',result);
})
.catch((err)=>{
console.log(err.message);
});
console.log('After Asynshronous operation');