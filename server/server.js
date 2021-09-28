const express = require('express');
const app = express();
//const cors = require('cors'); 
const port = 3000;

//app.use(cors()); 

const search = [
  {
    id: 1, cars: 'Used Cars For Sale | AutoTrader', description: 'Used cars for sale, including private sales and local dealers near you. Find the right used car for you on Auto Trader - the UKs top destination.'
  }, {
    id: 2, cars: 'Cars (2006) - IMDb', description: 'Cars: Directed by John Lasseter, Joe Ranft. With Owen Wilson, Paul Newman, Bonnie Hunt, Larry the Cable Guy. A hot-shot race-car named Lightning McQueen ...'
  }, {
    id: 3, chicken: 'Chicken recipes | BBC Good Food', description: 'Perk up your poultry with our top chicken recipes. Weve got you covered whether its a traditional roast, a flavourful curry or a ... '
  },
  {
    id: 4, chicken: 'The best chicken recipes | Jamie Oliver', description: 'Chicken is always a crowd-pleaser, and here are loads of deliciously easy chicken recipes for you to try, from Sunday roasts to zingy salads. '
  },
  {
    id: 5, drones: 'Camera Drones - DJI', description: 'Looking for a camera drone? DJI drones offer incredible drone technology for every user. Discover the best camera drones like DJI Mavic Air 2, DJI Mavic 2 ...'
  }
]


app.get('/', (req, res) => res.send('Welcome to (not)Google search'));

//Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})