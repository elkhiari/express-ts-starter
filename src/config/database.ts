import mongoose, { MongooseError } from 'mongoose';
import logger from '../utils/logger';

// Retrieve MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;
// Connect to the MongoDB database
export const connectToDatabase = async (): Promise<void> => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not set.");
    }

    await mongoose.connect(MONGO_URI);

  } catch (error : any) {
    logger.error(`connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if the connection fails
  }
};

mongoose.connection.on('connected', () => {
  logger.info('Mongoose connection established');
});

mongoose.connection.on('error', (err) => {
  logger.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose connection disconnected');
});

// Export mongoose for use elsewhere
export default mongoose;
