//Global NPM modules
require('express-async-errors');

//NPM modules
const express = require('express');
const dotenv = require('dotenv');

//Local modules
const connectDB = require('./database/connect');

//routers 
const authRouter = require('./routers/auth');

//middleware
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

//APP initialization
dotenv.config({path:'.env'});

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);

app.use(notFound);
app.use(errorHandler);

const init = async () => {
    const port = process.env['PORT'];
    const uri = process.env['MONGO_URI'];
    
    await connectDB(uri);
    app.listen(port, () => console.log(`Server is listening for requests on port ${port}.`));
}

init();
