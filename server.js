const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./db');
const sermonRoute = require('./routes/sermon.route');
mongoose.Promise = global.Promise;
mongoose.connect(confid.DB, {useNewUrlParser: true}).then(
  ()=> {console.log('Database is conected')},
  err => {console.log('cannot connecto to the database' + err)}
)

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/sermons', sermonRoute);
const port = process.env.PORT || 4000;

const server = app.listen(function(){
    console.log('Listening on port' + port);
})

const path = require('path');


app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);
