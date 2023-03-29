const express = require('express');
require('dotenv').config();

const app = express();


app.get('/', (req, res) => {
    res.send(process.env.ENV_TEXT);
});




const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})
