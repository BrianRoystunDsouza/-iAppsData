const mongoose = require('mongoose');
const winston = require('winston');

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully!');
    winston.info('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    winston.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
