'use strict';

const express = require('express');
const googleMap = require('./service/googlemap-service');

// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/api/reviews', async (req, res) => {
    const reviews = await googleMap.readReviews();

    res.send(reviews);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
