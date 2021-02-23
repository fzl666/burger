const mysql = require('mysql');

const connection 
if (process.env.JAWSDB_URL) {
  CONNECTION=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:'d6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'buic616fm6vesg5d',
    password:'mrqkt4tdnt14w9af',
    database:'l721a8bm0in3qn1l'
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