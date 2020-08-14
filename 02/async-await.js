const myAsyncFunc = async()=>{
    try{
    const result = await Promise.resolve('Asyns Function');
    console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
myAsyncFunc();