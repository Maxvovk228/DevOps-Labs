const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const APP_VERSION = process.env.APP_VERSION || "2.0";

app.get("/", (req, res) => {
    res.send(`<h1>Hello from Node.js Docker VERSION ${APP_VERSION}!</h1>`);
});

app.get("/about", (req, res) => {
    res.send("<h2>Express application - Version 2.0</h2>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
