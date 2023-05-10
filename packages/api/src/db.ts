import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const {
  MONGO_ROOT_USERNAME,
  MONGO_ROOT_PASSWORD,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE_NAME
} = process.env;

const mongoString = `mongodb://${MONGO_ROOT_USERNAME}:${MONGO_ROOT_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`;
async function connect() {
  try {
    await mongoose.connect(mongoString, { dbName: MONGO_DATABASE_NAME });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export { connect };
