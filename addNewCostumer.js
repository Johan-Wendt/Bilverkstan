var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'johan',
    password: 'Jag1337',
    database: 'bilverkstaden'
});

connection.connect();

function addNew(costumer) {
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
exports.addNew = addNew;