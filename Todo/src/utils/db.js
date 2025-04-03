import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dypiu',
  database: 'todo_app'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

export function query(sql, values) {
  console.log('Executing SQL:', sql); // Log the SQL query
  console.log('With values:', values); // Log the values being passed

  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, results) => {
      if (error) {
        console.error('Query error:', error); // Log the error
        return reject(error);
      }
      console.log('Query results:', results); // Log the results
      resolve(results);
    });
  });
}

export function closeConnection() {
  db.end(err => {
    if (err) {
      console.error('Error closing the database connection:', err.stack);
    } else {
      console.log('Database connection closed.');
    }
  });
}