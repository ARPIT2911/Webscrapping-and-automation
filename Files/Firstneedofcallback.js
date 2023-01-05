let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);
function Isprime(x)
{
    let isprime=true;
    for(let div=2;div<x;div++)
    {
        if(x%div==0)
        {console.log("starting task 1 -" + t1);
        
        isprime=false;
        return isprime;
    }
    return isprime;
}
}

let t1=Date.now();
console.log("starting task 1 -" + t1);

let data=fs.readFile(args.source,function(data){//use of callback async
    let t2=Date.now();
    console.log("ending task 1 -" + t2);
});


let t3=Date.now();
console.log("starting task 2 -" + t3);
let arr=[];
for(let i=1;i<=500000;i++)
{
    let isprime=Isprime(i);
    if(isprime==true)
    {
        arr.push(i);
    }
}
let t4=Date.now();
console.log("ending task 2 -" + t4);