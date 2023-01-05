let minimist=require("minimist");
let args=minimist(process.argv);
//input on cmdline-node filename.js --source=file1.txt --dest=file2.txt
let fs=require("fs");//inbuilt lib. in nodejs
let stext=fs.readFileSync(args.source,"utf-8");//reading file given in source
//console.log(stext);
stext=stext.toUpperCase();
fs.writeFileSync(args.dest,stext,"utf-8");
