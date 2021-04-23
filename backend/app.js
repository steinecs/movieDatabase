const express = require('express');
const app = express();
const port = 3000;

//include the connection to database, so we can use it
//require('./models/db');

//library to help parse incoming requests
const bodyParser = require('body-parser');
// Only parse JSON bodies
app.use(bodyParser.json());    
// extended: true means to parse deeply nested objects
app.use(bodyParser.urlencoded({extended: true}));


//Routing
const movieRoutes = require('./routes/movies');	
// AND	
app.use("/movies", movieRoutes);	

app.get('/', (req, res) => res.send('Movie app'));

app.listen(port, () => console.log(`App listening on port ${port}!`));