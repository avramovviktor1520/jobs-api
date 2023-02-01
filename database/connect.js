const mongoose = require('mongoose');
const options = {
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,

}

exports.connect = async (connectionURI) => {
    await mongoose.connect(connectionURI, options);
}