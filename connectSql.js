// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "awseem23845",
//   database: "bank",
// });

// pool.query(
//   "select * from account where account_number=1003",
//   (err, results, fields) => {
//     if (err) return console.log(err);
//     return console.log(results);
//   }
// );

// pool.end((err) => {
//   if (err) {
//     console.error("Error closing the pool:", err);
//   } else {
//     console.log("Pool has been closed successfully.");
//   }
// });

// const mysql = require("mysql2/promise"); // Notice the inclusion of /promise here

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "awseem23845",
//   database: "bank",
//   connectionLimit: 10, // Set the maximum number of connections in the pool
// });

// // Example query function using async/await
// async function executeQuery(queryString, values) {
//   try {
//     const connection = await pool.getConnection();
//     const [results, fields] = await connection.query(queryString, values);
//     connection.release();
//     return results;
//   } catch (err) {
//     throw err;
//   }
// }

// // Usage example
// (async () => {
//   try {
//     const results = await executeQuery("SELECT * FROM account");
//     console.log("Query results:", results);
//   } catch (err) {
//     console.error("Error executing query:", err);
//   } finally {
//     // Close the pool when the application is finished (optional)
//     pool.end();
//   }
// })();

const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
});

const query = async (queryString, values) => {
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.query(queryString, values);
    // console.log(fields);
    connection.release();
    return results;
  } catch (err) {
    if (err) throw err;
  }
};

// query("select * from account where id=?", [1001]);
(async () => {
  try {
    const results = await query("select * from account");
    console.log(results);
  } catch (err) {
    console.error("Error executing query:", err);
  } finally {
    pool.end();
  }
})();
