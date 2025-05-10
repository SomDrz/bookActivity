
const express = require('express');
const app = express();
require('dotenv').config();

const {Connection} = require('./Config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Connection();

app.use('/api/auth', require('./router/userRoutes'));
app.use('/api/activities', require('./router/activityRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
