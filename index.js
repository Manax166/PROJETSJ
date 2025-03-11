const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => console.log(`App Running on port ${PORT}`));

app.use( require( "./router/BarRouter"))
app.use( require( "./router/BiereRouter"))
app.use( require( "./router/CommandeRouter"))
app.use( require( "./router/BiereCommandeRouter"))