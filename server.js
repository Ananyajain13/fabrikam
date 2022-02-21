var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ananya jain");
};
var onDefault=function(req, res){
    res.send("<h1>Fabricam Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Fabrikam is a multinational company has their 24 Offices all over world. Company wanted to build andhost Information Management Solutions in web.</li>"+
                    " <li>Company also wants to host internet public web site for their potential customers to know about products and services provided.</li>"+
                    " <li>They required to build and hostintranet application for all employees to access Human Resource, Accounting and Project Management</li>"+
                    " <li>related information. Fabrikam has public Cloud subscription to use it as Infrastructure as a Service (I-a-a-S)and Platform As A Service.</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
