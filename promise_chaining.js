let countValue=new Promise(function(resolve,reject)
{
    resolve("Promise resolved..");
});

countValue
.then(function successValue(result)
{
    console.log(result);
}

)
.then(function successValue1()
{
   console.log("You can call multiple function this way");
});

