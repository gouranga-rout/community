import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, unique: true, default: ''},
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  referralLink: { type: String, default: '' },
  isAdmin: { type: Boolean, default: false },
  registeredDate: {
    type: Date,
    default: () => new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  }
});

const User = mongoose.model('User', userSchema);

export default User;
