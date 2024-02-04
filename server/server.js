const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/connect');

const postMessageRoute = require('./routes/postmessage.route');
const postMessageAuthenticateRoute = require('./routes/postmessageauthenticate.route');
const getMessageRoute = require('./routes/getmessage.route');
const getMessageAuthenticateRoute = require('./routes/getmessageauthenticate.route');
const updateMessageRoute = require('./routes/updatemessage.route');
const deleteMessageRoute = require('./routes/deletemessage.route');
const getSpecificRoute = require('./routes/getmessagebyid.route');
const register = require('./routes/register.route');
const login = require('./routes/login.route');
const loginJWT = require('./routes/login.route.JWT');

const getUserMessageRoute = require('./routes/getmessagesofuser.route.js');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/post-message',postMessageRoute);
app.use('/post-message-authenticate',postMessageAuthenticateRoute);
app.use('/get-message',getMessageRoute);
app.use('/get-message-authenticate',getMessageAuthenticateRoute);
app.use('/get-specific-message',getSpecificRoute);
app.use('/update-message',updateMessageRoute);
app.use('/delete-message',deleteMessageRoute);
app.use('/register',register);
app.use('/login',login);
app.use('/loginJWT',loginJWT);

app.use('/user-message',getUserMessageRoute);
