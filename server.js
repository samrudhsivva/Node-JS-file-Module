//File System using fs module in NodeJS

var fs=require("fs");
var http=require("http");

const prompt=require("prompt-sync")({sigint:true}); 

//Creating Reading Updating Deleting Renaming...

//Reading
http.createServer(function(req,res)
{
fs.readFile("./index.html", function(err,data)
{
    res.write(data);
    res.end();
});

//Creating
fs.open("./index2.html","w",function(err)
{
    if (err) throw err;
    console.log("index2.html is created");
})
fs.open("./index3.html","w",function(err)
{
    if (err) throw err;
    console.log("index3.html is created");
})


//Updating

fs.appendFile("./index2.html","<h2> Appended Content</h2>", (err)=>{
    if (err) throw err;
    console.log("content appended!!!");
    
})


//Deletion

fs.unlink("./index3.html",(err)=>
{

console.log("index3.html file is deleted!!!");    
})

//Renaming
fs.rename("./index2.html","./index5.html",(err)=>
{
    console.log("File renamed!!");
})

    }


).listen(3000);



