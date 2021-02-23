const mysql = require('mysql');

const connection 
if (process.env.JAWSDB_URL) {
  CONNECTION=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'burgers_db'
  })
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;