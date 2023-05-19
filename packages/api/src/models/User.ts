import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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

export default mongoose.model('User', userSchema);
