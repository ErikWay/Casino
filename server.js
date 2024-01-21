const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const app = express();
const port = 3000; // Можете изменить порт, если нужно

const morgan = require('morgan');
app.use(morgan('dev'))

app.use(cors({
  origin: 'http://localhost:8080', // Замените на адрес вашего фронтенда
  credentials: true,
}));
app.options('*', cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

app.use(session({
  secret: 'your-secret-key', // Замените 'your-secret-key' на свой секретный ключ
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Установите true, если используете HTTPS
}));
// Middleware

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
// Добавьте этот блок для настройки сессий


app.post('/logout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error during logout:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.clearCookie('connect.sid');
      res.status(204).end(); // Отправляем успешный статус без тела
    }
  });
});

app.get('/check-auth', (req, res) => {
  const { username } = req.session;
  if (username) {
    const allowedOrigins = ['http://localhost:8080'];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json({ authenticated: true, username });
  } else {
    res.json({ authenticated: false });
  }
});

app.post('/register', async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Пароли не совпадают' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  connection.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashedPassword],
    (err) => {
      if (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Регистрация успешна' });
      }
    }
  );
  //req.session.username = req.body.username; // Сохранение информации о текущем пользователе в сессии
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  connection.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    async (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Неверный пароль' });
      }

      const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
      
      req.session.username = req.body.username; // Сохранение информации о текущем пользователе в сессии
      return res.status(200).json({ token });
    }
  );

  // Сюда не должны доходить, т.к. ответ уже отправлен внутри функции обратного вызова
  // res.json({ message: 'Login successful' });
  // console.log('Login successful:', req.body.username);
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


