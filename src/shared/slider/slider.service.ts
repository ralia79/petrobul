import axios from 'axios';

const placeId = 'ChIJ9TDpcNk8v0cRvZellHm-AyE';
const apikey = 'AIzaSyD8hsEOsgequMzGwz3N3jxQd3ZtGEn1-ho';
export default class SliderService {
    public getAllReviews(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(`https://mybusiness.googleapis.com/v4/accounts/${apikey}/locations/${placeId}/reviews`)
                .then((res: { data: any; }) => {
                    resolve(res.data);
                })
                .catch((err: { data: any; }) => {
                    reject(err);
                });

        });
    }

}