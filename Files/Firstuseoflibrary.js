let minimist = require("minimist");//using minimist library just check on net
let args = minimist(process.argv);//passing process.argv through minimist to args

let age=args.age;//directly using them using .opertor like object
let name=args.name;
if(age<30)
{
    console.log("heya" + name + "lets have party tonight");
}
else{
    console.log("hey" + name + "Just go home old man");
}