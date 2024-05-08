const mongoose = require('mongoose');
const MongoLink = 'mongodb+srv://danishnnt:Khush@123@danishnnt.9jvguuv.mongodb.net/?retryWrites=true&w=majority&appName=danishnnt'

const MongoDbLink =async () => {
   await mongoose.connect(MongoLink,() => {
        console.log("connected sucess")
    });
}

module.exports = MongoDbLink;

