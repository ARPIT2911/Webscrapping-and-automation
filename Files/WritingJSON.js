//node WritingJSON.js --dest=teams.json
let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);

let teams=[//array of object which is also an object
    {
        name:"India",
        rank:1,
        matches:[//again an array of objects
            {
                opponent:"Australia",
                result:"won"

            },
            {
                opponent:"Southafrica",
                result:"won"
            }
        ]

    },
    {
        name:"Australia",
        rank:3,
        matches:[
            {
                opponent:"India",
                result:"lose"

            },
            {
                opponent:"Southafrica",
                result:"lose"
            }
        ]
    },
    {
        name:"Southafrica",
        rank:2,
        matches:[
            {
                opponent:"Australia",
                result:"won"

            },
            {
                opponent:"India",
                result:"lose"
            }
        ]
    }
]
//console.log(teams[1].matches[0].result);
//knowing how to access the elements of teams and checking that code is right or not
let json=JSON.stringify(teams);
//  JSO  -> JSON ,so that we can save or print it

fs.writeFile(args.dest,json,"utf-8",function(data){
    //console.log(data); data->null
})