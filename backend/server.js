'use strict';

const express = require('express');
const googleMap = require('./service/googlemap-service');
const chartDataService = require('./service/chartdata-service')

// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await googleMap.readReviews();
        res.send(reviews);
    } catch (e) {
        res.send(e)
    }
});

app.post('/api/chartData', async (req, res) => {
    try {
        // const chartData = await chartDataService.getData(req.body);
        res.send(req.body.data)
    } catch (e) {
        res.send(e)
    }
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
