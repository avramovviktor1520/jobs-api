const mongoose = require('mongoose');
module.exports = async (connectionURI) => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(connectionURI);
}