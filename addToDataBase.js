var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'johan',
    password: 'Jag1337',
    database: 'bilverkstaden'
});

connection.connect();

function addNewCostumer(costumer) {
    var newCostumer = {
        P_Id: costumer.ID,
        FirstName: costumer.FirstName,
        LastName: costumer.SecondName,
        Phone: costumer.Phone,
        Mail:costumer.Mail
    };
    
    var query = connection.query('insert into Costumer set ?', newCostumer, function(err, result) {
        if(err) {
            console.error(err);
            return;
        }
        console.error(result);
    });
}
function addNewSubmission(submission) {
    var newSubmission = {
        Costumer: submission.P_ID,
        Car: submission.C_ID,
    };
    
    var query = connection.query('insert into Submission set ?', newSubmission, function(err, result) {
        if(err) {
            console.error(err);
            return;
        }
        console.error(result);
    });
}
exports.addNewCostumer = addNewCostumer;
exports.addNewSubmission = addNewSubmission;