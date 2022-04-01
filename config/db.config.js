const mysql = require('mysql');


// create mysql connection

const dbConn = mysql.createConnection({
    host: 'sql4.freesqldatabase.com',
    user: 'sql4482910',
    password: 'f2XFakj4uF',
    database: 'sql4482910'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database connected successfully ;)")
})

module.exports = dbConn;

