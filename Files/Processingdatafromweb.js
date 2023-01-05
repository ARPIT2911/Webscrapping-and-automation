//npm install jsdom
//node Processingdatafromweb.js --source=download.html
let minimist=require("minimist");
let fs=require("fs");
let jsdom=require("jsdom");
let args=minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,data){//data is html indirectly
    //console.log(data);full html file will be printed

    let dom=new jsdom.JSDOM(data);//creating object jsdom and then accessing JSDOM and passing data to JSDOM 
    
    let document=dom.window.document;//in notebook

    let element=document.querySelectorAll("div.match-info > div.description");
    for(let i=0;i<element.length;i++)
    {
        console.log(element[i].textContent);
    }
});
