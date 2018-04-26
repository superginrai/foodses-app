const express = require( 'express' );
const mongoose = require('mongoose');
const Food = require('./models/food.schema');
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: true }));

const foodRouter = require('./routes/food.router');

app.use(express.static('server/public'));

app.use('/food', foodRouter);

const databaseUrl = 'mongodb://localhost:27017/foodses'
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection error', error)
});

// app.get('/food', (req, res) => {
//     res.send([{name: 'pasta', deliciousness: 9, is_hot: true}]);
//   });

app.listen(PORT, function(){
    console.log('server running on: ', PORT);
  }); 
  