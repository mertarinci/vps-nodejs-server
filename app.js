const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World! This is port 8000.');
});





app.listen(8000, () => {
    console.log('VPS app listening on port 8000!')
})
