//npm install pdf-lib
//node Creatingpdf.js --source=teams.json --dest=Worldcup
let minimist=require("minimist");
let fs=require("fs");
let path=require("path");
let pdf=require("pdf-lib");

let args=minimist(process.argv);

let teamsjson=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsjson);

fs.mkdirSync(args.dest);

for(let i=0;i<teams.length;i++)
{
    let foldername=path.join(args.dest,teams[i].name);
    fs.mkdirSync(foldername);

    for(let j=0;j<teams[i].matches.length;j++)
    {
        let matchfilename=path.join(foldername,teams[i].matches[j].opponent +".pdf");
        createscorecard(teams[i].name,teams[i].matches[j],matchfilename);
        console.log(matchfilename);
    }
}
function createscorecard(team1,match,matchfilename)
{
let t1=team1;
let t2=match.opponent;
//console.log(match);
 let result=t1 + " " + match.result;
let orignalbytes=fs.readFileSync("Template.pdf");//bytes of pdf template
    //console.log(orignalbytes);
 let pdfdockapromise=pdf.PDFDocument.load(orignalbytes);
 
  pdfdockapromise.then(function(pdfdoc){


    let page=pdfdoc.getPage(0);
    console.log(page);
    console.log(t1 + " " + t2);

     page.drawText(t1,{
         x:320,
           y:750,
         size:10

     });
    page.drawText(t2,{
           x:320,
        y:735,
           size:10

     });
     page.drawText(result,{
           x:320,
        y:720,
         size:10
    });

    
let pdfsavekapromise=pdfdoc.save();
pdfsavekapromise.then(function(modifiedpdf){
    fs.writeFileSync(matchfilename,modifiedpdf);
})
})
}
