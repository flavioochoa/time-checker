const express = require('express');
const app = express();
const webAppPath = '/';
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.json());
app.use(express.static('public'));

var signInApi = require('./controllers/signIn');
var timeApi = require('./controllers/time');
var usersApi = require('./controllers/users');

app.use(`/api/sign-in`, signInApi);
app.use(`/api/time`, timeApi);
app.use(`/api/users`, usersApi);

app.get(['/', '/*'], function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

const notFound = (req, res) => {
    return res.status(404).json({ 'message': 'No encontrado', 'status': 'error' });
};

app.get('*', notFound);

console.log(`Run time-checker WebApp on http://localhost:${PORT}/. ENV . Static folder public`);
app.listen(PORT);