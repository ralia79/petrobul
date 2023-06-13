import {IReview} from "@/shared/model/review.model";

export interface IGoogleReview {
    rating?: number | null;
    reviews?: Array<IReview> | null;
    user_ratings_total?: number | null;
}

export class GoogleReview implements IGoogleReview {
    constructor(
        public rating?: number | null,
        public reviews?: Array<IReview> | null ,
        public user_ratings_total?: number | null,
    ) {}
}