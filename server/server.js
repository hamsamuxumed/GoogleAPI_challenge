const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv').config()
const app = express();
const port = 3000;

app.use(cors());

//Welcome get route
app.get('/', (req, res) => res.send('Welcome to (not)Google search'));

//Get search result route
app.get('/search/:query', async (req, res) => {
    try {
		const searchQuery = req.params.query;
        //Needs API key to work
        const apiKey = process.env.API_KEY;

        //Perform get on the API using the key and search query
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=81628101994699a0d&q=${searchQuery}`);
	
        //If successful, return true and the retrieved items JSON
		return res.json({
            success: true,
            result: response.data.items
        })
    //If error, log message
	} catch (err) {
		return res.status(500).json({
			success: false,
			result: err.message,
		})
	}
});


//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

