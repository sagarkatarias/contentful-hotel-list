import { Hotel } from "./Hotel";
import { Review } from "./Reviews";

export interface HotelContextType {
    hotels: Hotel[];
    setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
    reviews: Review[];
    setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
    firstClick: boolean;
    setFirstClick: React.Dispatch<React.SetStateAction<boolean>>;
    selectedHotelReviews: string[];
    setSelectedHotelReviews: React.Dispatch<React.SetStateAction<string[]>>;
    handleLoadHotels: () => Promise<void>;
    handleLoadReviews: () => Promise<void>;
    handleShowReviews: (hotelName: string) => Promise<void>;
  }