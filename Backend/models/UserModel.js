import mongoose from 'mongoose';

// SCHEMA
const User = mongoose.Schema({
  // FIELD
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Users', User);
