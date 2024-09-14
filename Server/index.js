const express = require('express');
const cors = require('cors');
const http = require("http");
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const winston = require('winston');
require('dotenv-safe').config();

const connectDB = require('./db');
const userRoutes = require('./routes/Employee');

const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(express.static('public'));

// Body parser configuration
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 10000000, limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));

// Express Middleware
app.use(express.json());
app.set('view engine', 'ejs');

// Winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Connect to MongoDB
connectDB();

// routes
app.use('/', userRoutes);

const gracefulShutdown = () => {
  server.close(() => {
    console.log("Server is shutting down...");
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed.");
      process.exit(0);
    });
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Port Configuration
const port = process.env.PORT || "8001";
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);

// Server Listening with error handling
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info(`Server is running on port ${port}`);
});

server.on('error', (error) => {
  if (error.syscall !== 'listen') throw error;

  // Handle specific listen errors 
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
