import { Review } from "../types/Reviews";

export const filterReviews = (reviews: Review[],name: string) => {
    return reviews.filter(review => review.hotel === name);
};