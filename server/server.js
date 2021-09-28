const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors'); 
const port = 3000;

app.use(cors()); 

const search = [
{
    id: 0, keyword: 'Used Cars For Sale | AutoTrader', description: 'Used cars for sale, including private sales and local dealers near you. Find the right used car for you on Auto Trader - the UKs top destination.'
},
{
    id: 1, keyword: 'Used Cars For Sale | AutoTrader', description: 'Used cars for sale, including private sales and local dealers near you. Find the right used car for you on Auto Trader - the UKs top destination.'
}, 
{
    id: 2, keyword: 'Cars (2006) - IMDb', description: 'Cars: Directed by John Lasseter, Joe Ranft. With Owen Wilson, Paul Newman, Bonnie Hunt, Larry the Cable Guy. A hot-shot race-car named Lightning McQueen ...'
}, 
{
    id: 3, keyword: 'Chicken recipes | BBC Good Food', description: 'Perk up your poultry with our top chicken recipes. Weve got you covered whether its a traditional roast, a flavourful curry or a ... '
},
  
{
    id: 4, keyword: 'The best chicken recipes | Jamie Oliver', description: 'Chicken is always a crowd-pleaser, and here are loads of deliciously easy chicken recipes for you to try, from Sunday roasts to zingy salads. '
},
{
    id: 5, keyword: 'Camera Drones - DJI', description: 'Looking for a camera drone? DJI drones offer incredible drone technology for every user. Discover the best camera drones like DJI Mavic Air 2, DJI Mavic 2 ...'
} 
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

