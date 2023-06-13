const axios = require('axios');


module.exports =  {
    getData: function(dataMode) {
        return axios
            .get(`'https://www.fastenergy.de/FE_CHARTS/data/${dataMode}.json'`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }
}
