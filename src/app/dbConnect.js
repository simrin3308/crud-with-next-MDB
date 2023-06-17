const mongoose = require('mongoose')

export default async function dbConnect(){
    await mongoose.connect("mongodb://127.0.0.1:27017/NextJS13_4", console.log("connected"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}