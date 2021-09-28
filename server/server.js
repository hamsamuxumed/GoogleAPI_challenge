const express = require('express');
const app = express();
//const cors = require('cors'); 
const port = 3000;

//app.use(cors()); 

const search = [{
  cars: 'Used Cars For Sale | AutoTrader', description: 'Used cars for sale, including private sales and local dealers near you. Find the right used car for you on Auto Trader - the UKs top destination.'
}]

app.get('/', (req, res) => res.send('Welcome to (not)Google search'));

//Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})