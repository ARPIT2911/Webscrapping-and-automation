//node ReadingJSON.js --source=FirstJSON.json
let minimist=require("minimist");
let fs=require("fs");
 
let args=minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,json)//use of callback
{
    if(err)
    {
        console.log(err);
    }
    else{
        //console.log(json);
       let teams=JSON.parse(json);//JSON-> JSO 
       //the teams here will behave as same as in writingjson.js file
       //console.log(teams[1].matches[1].result);//checking that code is correct or not
       

    }
});
