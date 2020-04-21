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