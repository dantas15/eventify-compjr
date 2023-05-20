import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  profilePictureUrl: {
    type: String
  }
});

const userModel = model('User', userSchema);
export { userModel as User };
