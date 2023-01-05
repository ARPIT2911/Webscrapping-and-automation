//node Creatingexcelfile.js --source=teams.json --dest=excel.csv
//use of google has been done to use this lib functions
//npm install excelnode4
let minimist=require("minimist");
let excel=require("excel4node");
let fs=require("fs");

let args=minimist(process.argv);
let teamsjson=fs.readFileSync(args.source,"utf-8");//reading json file->teams.json
let teams=JSON.parse(teamsjson);//JSON ->JSO to perform operations
//same as that in writingjson
//console.log(teams[1].matches[0].result);

let wb=new excel.Workbook();
for(let i=0;i<teams.length;i++)
{
    let sheet=wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("Opponent");//sheet me value daalne ka tareeka
    //agar number value daalni h toh.number use krenge
    sheet.cell(1,2).string("Result");
    for(let j=0;j<teams[i].matches.length;j++)
    {
        sheet.cell(2+j,1).string(teams[i].matches[j].opponent);
        sheet.cell(2+j,2).string(teams[i].matches[j].result);

    }
}
wb.write(args.dest);