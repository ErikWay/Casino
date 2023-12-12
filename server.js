const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // Можете изменить порт, если нужно

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ваш пользователь MySQL
  password: 'Luiza18!', // Ваш пароль MySQL
  database: 'my_casino', // Ваша база данных
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API Endpoints
app.get('/games', (req, res) => {
  connection.query('SELECT * FROM games', (err, results) => {
    if (err) {
      console.error('Error getting games from MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/games', (req, res) => {
  const { name, description, minBet } = req.body;
  connection.query(
    'INSERT INTO games (name, description, minBet) VALUES (?, ?, ?)',
    [name, description, minBet],
    (err, results) => {
      if (err) {
        console.error('Error adding game to MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Game added successfully' });
      }
    }
  );
});

// Server Listening
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



  app.get('/games', (req, res) => {
    connection.query('SELECT * FROM games', (err, results) => {
      if (err) {
        console.error('Error getting games from MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.post('/games', (req, res) => {
    const { name, description, minBet } = req.body;
    connection.query(
      'INSERT INTO games (name, description, minBet) VALUES (?, ?, ?)',
      [name, description, minBet],
      (err, results) => {
        if (err) {
          console.error('Error adding game to MySQL:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Game added successfully' });
        }
      }
    );
  });
  
  // Обработка запроса на статические файлы
  app.use(express.static('public'));
  
  // Обработка всех остальных запросов
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  