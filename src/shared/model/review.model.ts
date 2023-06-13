export interface IReview {
    author_name?: string | null;
    author_url?: string | null;
    profile_photo_url?: string | null;
    rating?: number | null;
    text?: string | null;
    time?: number | null;
}

export class Review implements IReview {
    constructor(
        public author_name?: string | null,
        public author_url?: string | null,
        public profile_photo_url?: string | null,
        public rating?: number | null,
        public text?: string | null,
        public time?: number | null,
    ) {}
}