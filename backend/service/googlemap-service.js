const axios = require('axios');

const placeId = 'ChIJE58IWys9v0cRoRqbVt2Gsrc';
const apikey = 'AIzaSyD8hsEOsgequMzGwz3N3jxQd3ZtGEn1-ho';

module.exports =  {
    readReviews: function() {
        return axios
            .get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=user_ratings_total,rating,reviews&key=${apikey}&region=DE&language=de`)
            .then((res) => {
                //resolve(res.data);
                console.log(res.data);

                return res.data;
            })
            .catch((err) => {
                //reject(err);
                console.error(err);
            });
    }
}
