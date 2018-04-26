const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.get('/food', (req, res) => {
    res.send([{name: 'pasta', deliciousness: 9, is_hot: true}]);
  });

app.listen(PORT, function(){
    console.log('server running on: ', PORT);
  }); 
  