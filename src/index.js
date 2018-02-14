const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

let secretNumber, historyString, userNumber;

app.get('/', (req, res) => {
    secretNumber = Math.floor(Math.random() * 10000) + 1;
    historyString = '';
    res.render('index', {secretNumber, userNumber, historyString});
});

app.get('/game', (req, res) => {
    res.redirect('/');
});

app.post('/game', (req, res) => {
    userNumber = req.body.userNumber;
    historyString = historyString + userNumber + ', ';
    res.render('index', {secretNumber, historyString, userNumber});
});


app.listen(3000, () => {
    console.log('Server running on port 3000!');
});