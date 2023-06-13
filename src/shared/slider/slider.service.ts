import axios from 'axios';
import {IGoogleReview} from "@/shared/model/googleReview.model";

export default class SliderService {
    public getAllReviews(): Promise<IGoogleReview> {
        return new Promise<IGoogleReview>((resolve, reject) => {
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
