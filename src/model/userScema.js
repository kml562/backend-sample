import mongoose from "mongoose";
const mixedtype = mongoose.Schema.Types.Mixed;
const {model,Schema}= mongoose
//mongoose.Schema.Types.Mixed,==>>>>>
const userscema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
},
  password: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default:2
  }
} ,{timestamps: true});

const User =model('User', userscema)
export default User;