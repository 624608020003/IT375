const getStudent = (id)=>{
    return new Promise((resolove,rejects)=>{
        setTimeout(()=>{
            let name = 'Molei';
            if (name){
                resolove({staid:id,stuname:name})
            }else{
                rejects(new Error('connot get the result'));
            }
        },2000);
    });
}
getStudent(15)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.messa);
});