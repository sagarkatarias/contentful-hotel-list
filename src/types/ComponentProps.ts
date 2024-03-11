import { Hotel } from "./Hotel";
import { Review } from "./Reviews";


export interface ImageContainerProps {
    url: string;
    name: string;
}

export interface HotelDescriptionContainerProps {
    hotel: Hotel;
}

export interface SingleReviewProps {
    review: Review;
}