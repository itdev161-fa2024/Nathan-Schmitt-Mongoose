import express from 'express';

import connectDB from './config/db';

//Initialize Express Application
const app = express();
const port = 3001;

//Connect Database
connectDB();

//API Endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Connection Listener
app.listen(port, () => console.log(`Express server running on port ${port}`));