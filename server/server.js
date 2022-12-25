const express = require('express');
const app = express();
const cors = require('cors');

// Load env vars
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

// Middleware
// const logger = require("./middleware/logger")
// app.use(logger)

// Dev logging middleware
const morgan = require('morgan');
if (process.env.NODE_ENV === 'development') {
  // app.use(morgan('dev'));
}

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Route files
const users = require('./routes/users');

// Mount routers
app.use('/api/v1/users', users);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
