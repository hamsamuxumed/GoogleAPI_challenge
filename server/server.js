const express = require('express');
const app = express();
const axios = require('axios');
//const cors = require('cors'); 
const port = 3000;

//app.use(cors()); 

const search = [
{
  keyword: 'Used Cars For Sale | AutoTrader', 
  description: 'Used cars for sale, including private sales and local dealers near you. Find the right used car for you on Auto Trader - the UKs top destination.'
},
{keyword: 'hello', description: 'test'}
]

//Welcome get route
app.get('/', (req, res) => res.send('Welcome to (not)Google search'));

//Retrieve search result route
app.get('/search/:query', (req, res) => {

    //Temporary result storage array
    let searchResults = [];

    //If any search result item matches the search query, append it to the temporary array
    for(result of search){
        if(result.keyword.toLowerCase().includes(req.params.query)){
            searchResults.push(result);
        }
    }

    //If no items found send message, otherwise send search results
    !searchResults.length ? res.send('No results found') : res.send(searchResults);

}); 

//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

