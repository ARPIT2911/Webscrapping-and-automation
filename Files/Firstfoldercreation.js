//npm install path
//node Firstfoldercreation.js --source=teams.json --dest=Worldcup
let minimist=require("minimist");
let fs=require("fs");
let path=require("path");
 
let args=minimist(process.argv);

let teamsjson=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsjson);

for(let i=0;i<teams.length;i++)
{
    let foldername=path.join(args.dest,teams[i].name);
    fs.mkdirSync(foldername);
}
