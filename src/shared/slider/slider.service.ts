// @ts-ignore
import axios from 'axios';


const baseApiUrl = 'api/ages';
const placeId = 'ChIJE58IWys9v0cRoRqbVt2Gsrc';
const apikey = 'AIzaSyD8hsEOsgequMzGwz3N3jxQd3ZtGEn1-ho' ;
export default class SliderService {
    public getAllReviews(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=user_ratings_total,rating,reviews&key=${apikey}&region=DE&language=de`)
                .then((res: { data: any; }) => {
                    resolve(res.data);
                })
                .catch((err: { data: any; }) => {
                    reject(err);
                });
        });
    }

}