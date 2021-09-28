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
    id: 10, 
    keyword: 'Chicken recipes', 
    source: 'BBC Good Food',
    description: 'Perk up your poultry with our top chicken recipes. Weve got you covered whether its a traditional roast, a flavourful curry or a ... ',
    url: 'https://www.bbcgoodfood.com/recipes/collection/chicken-recipes'
},
  
{
    id: 11, 
    keyword: 'The best chicken recipes', 
    source: 'Jamie Oliver',
    description: 'Chicken is always a crowd-pleaser, and here are loads of deliciously easy chicken recipes for you to try, from Sunday roasts to zingy salads.',
    url: 'https://www.jamieoliver.com/recipes/chicken-recipes/'
},
{
    id: 12, 
    keyword: "I ate Cardiff's hottest chicken tenders and it didn't end well", 
    source: 'WalesOnline',
    description: 'The last time I did a food challenge more than a decade ago, I vowed that I’d never do one again.',
    url: 'https://www.walesonline.co.uk/whats-on/food-drink-news/ate-cardiffs-hottest-chicken-tenders-21685346'
},
  
{
    id: 13, 
    keyword: 'How the Chicken Conquered the World', 
    source: 'Smithsonianmag',
    description: 'The epic begins 10,000 years ago in an Asian jungle and ends today in kitchens all over the world',
    url: 'https://www.smithsonianmag.com/history/how-the-chicken-conquered-the-world-87583657/'
},
{
    id: 14, 
    keyword: 'Chicken recipes', 
    source: 'BBC Good Found',
    description: 'Perk up your poultry with our top chicken recipes. Weve got you covered whether its a traditional roast, a flavourful curry or a ... ',
    url: 'https://www.bbcgoodfood.com/recipes/collection/chicken-recipes'
},
  
{
    id: 15, 
    keyword: 'Chicken Recipes',
    source: 'Food & Wine Magazine',
    description: 'As the child of Portuguese immigrants, 2011 Food & Wine Best New Chef George Mendes grew up eating all sorts of rice dishes at home.',
    url: 'https://www.foodandwine.com/meat-poultry/chicken'
},
{
    id: 16, 
    keyword: '12 Popular Indian Chicken Recipes', 
    source: 'The Spruce Eats',
    description: 'Due to religious reasons, a lot of people in India do not eat beef or pork, making chicken the most common meat in Indian cuisine',
    url: 'https://www.thespruceeats.com/most-popular-indian-chicken-dishes-1957406'
},
{
    id: 17, 
    keyword: 'Chicken Archives', 
    source: 'Cafe Delites',
    description: 'Easy chicken recipes you will come back to time and time again! CRISPY Roasted Chicken, Honey Garlic Chicken, Chicken Salad recipes, Creamy Chicken Breasts or Thighs, Grilled Chicken, Slow Cooker Chicken, so many choices!',
    url: 'https://cafedelites.com/category/dinner-recipes/chicken-recipes/'
},
{
    id: 18, 
    keyword: 'Chicken recipes | BBC Good Food', 
    description: 'Perk up your poultry with our top chicken recipes. Weve got you covered whether its a traditional roast, a flavourful curry or a ... ',
    url: 'https://www.bbcgoodfood.com/recipes/collection/chicken-recipes'
},
  
{
    id: 19, 
    keyword: 'The best chicken recipes | Jamie Oliver', 
    description: 'Chicken is always a crowd-pleaser, and here are loads of deliciously easy chicken recipes for you to try, from Sunday roasts to zingy salads. ',
    url: 'https://www.bbcgoodfood.com/recipes/collection/chicken-recipes'
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

