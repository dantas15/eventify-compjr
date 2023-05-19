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
  googleImgUrl: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', userSchema);
