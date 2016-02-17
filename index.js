var server=require("./server"); 
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/newCostumer"]=requestHandlers.newCostumer;
handle["/uploadNewCostumer"]=requestHandlers.uploadNewCostumer;
handle["/newSubmission"]=requestHandlers.newSubmission;
handle["/uploadNewSubmission"]=requestHandlers.uploadNewSubmission;
handle["/changeSubmission"]=requestHandlers.changeSubmission;
handle["/changeSubmissionFor"]=requestHandlers.changeSubmissionFor;
handle["/uploadChangeSubmission"]=requestHandlers.uploadChangeSubmission;



server.start(router.route, handle);