const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => console.log(`App Running on port ${PORT}`));
