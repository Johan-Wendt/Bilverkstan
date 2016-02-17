var exec=require("child_process").exec;
var addToDataBase=require("./addToDataBase");
var queryDatabase=require("./queryDatabase");

var querystring=require("querystring");

function start(response, postData){
    console.log("Request handler 'start' was called.");
    

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    'Förnamn <br>'+
    '<input type="text" name="FirstName" /> <br>'+
    'Efternamn <br>'+
    '<input type="text" name="SecondName" /> <br>'+
    'Personnummer <br>'+
    '<input type="text" name="ID" /> <br>'+
    'Telefon <br>'+
    '<input type="text" name="Phone" /> <br>'+
    'E-post <br>'+
    '<input type="text" name="Mail" /> <br>'+
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function newCostumer(response, postData){
    console.log("Request handler 'newCostumer' was called.");
    

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/uploadNewCostumer" method="post">'+
    'Förnamn <br>'+
    '<input type="text" name="FirstName" /> <br>'+
    'Efternamn <br>'+
    '<input type="text" name="SecondName" /> <br>'+
    'Personnummer <br>'+
    '<input type="text" name="ID" /> <br>'+
    'Telefon <br>'+
    '<input type="text" name="Phone" /> <br>'+
    'E-post <br>'+
    '<input type="text" name="Mail" /> <br>'+
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function newSubmission(response, postData){
    console.log("Request handler 'newSubmission' was called.");
    

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/uploadNewSubmission" method="post">'+
    'Kunds personnummer <br>'+
    '<input type="text" name="P_ID" /> <br>'+
    'Registreringsskylt <br>'+
    '<input type="text" name="C_ID" /> <br>'+
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function changeSubmission(response, postData){
    console.log("Request handler 'newSubmission' was called.");
    

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/changeSubmissionFor" method="post">'+
    'Inlämningsnummer <br>'+
    '<input type="text" name="S_ID" /> <br>'+
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';


    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function changeSubmissionFor(response, postData){
    console.log("Request handler 'newSubmission' was called.");

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<br>' + 
    '<form action="/uploadChangeSubmission" method="post">'+
    'Kunds Faktura <br>'+
    '<input type="text" id="test" name="Invoice" /> <br>'+
    'Kunds Betald <br>'+
    '<input type="text" name="Paid" /> <br>'+
    'Kunds Bil <br>'+
    '<input type="text" name="PickedUp" /> <br>'+
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';



    var post = querystring.parse(postData);

    var P_Id = queryDatabase.showSubmission(response, post.S_ID, body);
  // var P_Id = queryDatabase.showSubmission(response, 'Costumer', 1);
    console.log("Request handler 'changeSubmissionFor' was called."); 
    //response.writeHead(200, {"Content-Type": "text/html"});
    //response.write("Personnumer: " + P_Id);
   // response.end();

}
function upload(response, postData){
    var post = querystring.parse(postData);
    console.log("Request handler 'upload' was called."); 
    addToDataBase.addNewCostumer(post);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + post.FirstName);
    response.end();
}

function uploadNewCostumer(response, postData) {
    console.log("Request handler 'newCostumer' was called.");
    var post = querystring.parse(postData);
    addToDataBase.addNewCostumer(post);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + post.FirstName);
    response.end();
}
function uploadNewSubmission(response, postData) {
    console.log("Request handler 'uploadNewSubmission' was called.");
    var post = querystring.parse(postData);
    addToDataBase.addNewSubmission(post);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + post.C_ID);
    response.end();
}
function uploadChangeSubmission(response, postData) {
    console.log("Request handler 'uploadNewSubmission' was called.");
    var post = querystring.parse(postData);
    addToDataBase.changeSubmission(post);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + post.Invoice);
    response.end();
}
function printResult(response, result, body) {
    console.log("Request handler 'printResult' was called.");
    var post = querystring.parse(result);
    var str = JSON.stringify(result, null, 2);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.write(str);
    response.end();
}

    

exports.start=start;
exports.upload=upload;
exports.newCostumer = newCostumer;
exports.uploadNewCostumer = uploadNewCostumer;
exports.newSubmission = newSubmission;
exports.uploadNewSubmission = uploadNewSubmission;
exports.changeSubmission = changeSubmission;
exports.changeSubmissionFor = changeSubmissionFor;
exports.printResult = printResult;