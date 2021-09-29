const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config()
const app = express();
const port = 3000;

app.use(cors());

/* const search = [
    {
        id: 0, keyword: 'Used Cars For Sale',
        source: 'AutoTrader',
        description: 'Used cars for sale, including private sales and local dealers near you. Find the right used car for you on Auto Trader - the UKs top destination.',
        url: 'https://www.autotrader.co.uk/used-cars'
    },
    {
        id: 1, keyword: 'Cars (film)',
        source: 'wikipedeia',
        description: 'Cars is a 2006 American computer-animated sports comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. ',
        url: 'https://en.wikipedia.org/wiki/Cars_(film)'
    },
    {
        id: 2, keyword: 'Cars (2006)',
        source: 'IMDb',
        description: 'Cars: Directed by John Lasseter, Joe Ranft. With Owen Wilson, Paul Newman, Bonnie Hunt, Larry the Cable Guy. A hot-shot race-car named Lightning McQueen ...',
        url: 'https://www.imdb.com/title/tt0317219/'
    },
    {
        id: 3, keyword: 'Cazoo',
        source: 'cazoo',
        description: 'Buy, finance or subscribe to your next car online and choose home delivery or collection. Sell your car without haggling, get an instant offer.',
        url: 'https://www.cazoo.co.uk/'
    },
    {
        id: 4, keyword: 'Gumtree: Used Cars for sale',
        source: 'gumtree',
        description: 'Visit our cars hub. Find everything you need to decide on your ideal used car inside. Read full review · Read more from our Motors Hub ...',
        url: 'https://www.gumtree.com/cars'
    },
    {
        id: 5,
        source: 'parkers',
        keyword: 'Used cars for sale | Parkers',
        description: '196266 results — Find Used cars for sale on Parkers. With the largest range of second hand cars, you will be sure to find your perfect car.',
        url: 'https://www.parkers.co.uk/cars-for-sale/used/'
    },
    {
        id: 6,
        source: 'Available Car',
        keyword: 'Available Car',
        description: 'Compare over 30 brands side by side · Over 5000 cars at 4 car supermarkets · Test drive any car at any Store · All cars unlocked for hassle free browsing ',
        url: 'https://www.availablecar.com/'
    },
    {
        id: 7,
        source: 'cinch',
        keyword: 'Cars Without The Faff',
        description: 'Welcome to cinch, the faff free way to buy & sell cars. We have thousands of used cars, all under 7 years old & under 70000 miles ready to be sold to you.',
        url: 'https://www.cinch.co.uk/'
    },
    {
        id: 8,
        source: 'eBay',
        keyword: 'Cars for sale',
        description: 'Cars · Find the car of your dreams. Pick up a new car from this great range. · Makes and models. There are vehicles from a huge range of manufacturers, from the ...',
        url: 'https://www.ebay.co.uk/b/Cars/9801/bn_1839037'
    },
    {
        id: 9,
        source: 'carwow',
        keyword: 'The car buying comparison site',
        description: 'carwow brings you the best offers from local and national dealers. No hassle, no need to haggle. You just choose which one to buy from.',
        url: 'https://www.carwow.co.uk/'
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
        description: 'The last time I did a food challenge more than a decade ago, I vowed that Id never do one again.',
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
        source: 'Birds Eye',
        keyword: 'Chicken Nuggets, Dippers and Nibbles',
        description: 'Our range of tasty chicken Dippers, Nuggets and bites are all made with 100% chicken breast, free from artificial colours, flavours or preservatives, ...',
        url: 'https://www.birdseye.co.uk/range/frozen-chicken/chicken-nuggets-dippers-and-nibbles'
    },
    {
        id: 19,
        source: 'Wendys',
        keyword: 'Classic Chicken',
        description: 'A juicy lightly breaded crispy chicken breast with crunchy lettuce, tomato, mayonnaise, and the perfect pickles all on a toasted bun.',
        url: 'https://www.wendys.com/en-uk/menu-items/classic-chicken'
    }
] */

//Welcome get route
app.get('/', (req, res) => res.send('Welcome to (not)Google search'));

//Retrieve search result route
app.get('/search/:query', async (req, res) => {
    try {
		const searchQuery = req.params.query;
        const apiKey = process.env.API_KEY;

        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=81628101994699a0d&q=${searchQuery}`);
	
		return res.json({
            success: true,
            result: response.data.items
        })
	} catch (err) {
		return res.status(500).json({
			success: false,
			result: err.message,
		})
	}
});

/*app.get('/search/:query', (req, res) => {

    //Temporary result storage array
    let searchResults = [];

    //If any search result item matches the search query, append it to the temporary array
    for (result of search) {
        let key = result.keyword.toLowerCase();
        let source = result.source.toLowerCase();
        let desc = result.description.toLowerCase();

        if (key.includes(req.params.query) || source.includes(req.params.query) || desc.includes(req.params.query)) {
            searchResults.push(result);
        }
    }

    //If no items found send message, otherwise send search results
    !searchResults.length ? res.send('No results found') : res.send(searchResults);

}); */

//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

