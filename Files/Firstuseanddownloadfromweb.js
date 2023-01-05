//Input-node Firstuseanddownloadfromweb.js --dest=download.html --url=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results
let minimist=require('minimist');
let axios=require('axios');
let fs=require('fs');
let args=minimist(process.argv);

//using axios to download from web and write html
let dwnldpromise=axios.get(args.url);
dwnldpromise.then(function(response){
    let html=response.data;
    //fs.writeFileSync(args.dest,html,"utf-8");callback has been used 
    fs.writeFile(args.dest,html,function(data){

    })
})