//node Project1.js --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results --excelfile=Projectexcelfile.csv --dest=teams1.json --datafolder=WorldcupFinal

let minimist = require("minimist");
let fs = require("fs");
let axios = require("axios");
let jsdom = require("jsdom");
let excel = require("excel4node");
let pdf = require("pdf-lib");
let path=require("path");

let args = minimist(process.argv);

let responsekapromise = axios.get(args.source);
responsekapromise.then(function (response) {
  let html = response.data;
  let dom = new jsdom.JSDOM(html);
  let document = dom.window.document;
  //console.log(document.title);
  let matchbox = document.querySelectorAll("div.match-score-block");
  //console.log(matchbox.length);
  let matches = [];

  for (let i = 0; i < matchbox.length; i++) {
    let match = {

    };
    let teamsname = matchbox[i].querySelectorAll("p.name");
    match.t1 = teamsname[0].textContent;
    //console.log(match.t1);
    match.t2 = teamsname[1].textContent;

    let matchresult = matchbox[i].querySelectorAll("div.status-text > span");
    //console.log(matchresult[0].textContent); important-[0] will come
    match.result = matchresult[0].textContent;
    let teamscore = matchbox[i].querySelectorAll("span.score");
    if (teamscore.length == 1) {
      match.t1s = teamscore[0].textContent;
      match.t2s = " ";
    }
    else if (teamscore.length == 2) {

      match.t1s = teamscore[0].textContent;
      match.t2s = teamscore[1].textContent;
    }
    else {
      match.t1s = " ";
      match.t2s = " ";
    }
    matches[i] = match;
  }
  let json=JSON.stringify(matches);
  fs.writeFileSync(args.dest,json,"utf-8");
  let wb = new excel.Workbook();
  let teamsname = ["India", "Australia", "West Indies", "England", "New Zealand", "South Africa", "Sri Lanka", "Bangladesh", "Afghanistan", "Pakistan"];
  for (let i = 0; i < teamsname.length; i++) {
    let sheet = wb.addWorksheet(teamsname[i]);
    sheet.cell(1, 1).string("Opponent");
    sheet.cell(1, 2).string("Team1 Score");
    sheet.cell(1, 3).string("Team2 Score");
    sheet.cell(1, 4).string("Result");
    let c = 0;
    for (let j = 0; j < matches.length; j++) {
      if (teamsname[i] == matches[j].t1) {

        sheet.cell(c + 2, 1).string(matches[j].t2);
        sheet.cell(c + 2, 2).string(matches[j].t1s);
        sheet.cell(c + 2, 3).string(matches[j].t2s);
        sheet.cell(c + 2, 4).string(matches[j].result);
        c++;
      }
      else if (teamsname[i] == matches[j].t2) {
        sheet.cell(c + 2, 1).string(matches[j].t1);
        sheet.cell(c + 2, 2).string(matches[j].t1s);
        sheet.cell(c + 2, 3).string(matches[j].t2s);
        sheet.cell(c + 2, 4).string(matches[j].result);
        c++;
      }
    }
  }
  wb.write(args.excelfile);

  fs.mkdirSync(args.datafolder);
  for(let k=0;k<teamsname.length;k++)
  {
    let foldername=path.join(args.datafolder,teamsname[k]);
      fs.mkdirSync(foldername);
  }


})