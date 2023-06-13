import axios from 'axios';

export default class SliderService {
    public getAllReviews(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .get(`/api/reviews`)
                .then((res: { data: any; }) => {
                    resolve(res.data);
                })
                .catch((err: { data: any; }) => {
                    reject(err);
                });

        });
    }
}
