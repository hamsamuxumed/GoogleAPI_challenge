const express = require('express');
const app = express();
//const cors = require('cors'); 
const port = 3000;

//app.use(cors()); 

app.get('/', (req, res) => res.send('Welcome to (not)Google search'));

//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })