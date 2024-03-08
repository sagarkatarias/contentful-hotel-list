import React, { createContext, useState, ReactNode } from 'react';
import { Hotel } from '../types/Hotel';
import { Review } from '../types/Reviews';
import useContentful from '../hooks/useContentful';

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

export const HotelContext = createContext<HotelContextType | undefined>(undefined);


interface HotelProviderProps {
  children: ReactNode;
}

export const HotelProvider: React.FC<HotelProviderProps> = ({ children }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [firstClick, setFirstClick] = useState(false);
  const [selectedHotelReviews, setSelectedHotelReviews] = useState<string[]>([]);

  const { getHotels, getReviews } = useContentful(); // Assuming useContentful is exported from another module

  const handleLoadHotels = async () => {
    if (!hotels.length) {
      const entries: Hotel[] = await getHotels();
      setHotels(entries);
    }
  };

  const handleLoadReviews = async () => {
    const reviews: Review[] = await getReviews();
    setReviews(reviews);
  }

  const handleShowReviews = async (hotelName: string) => {
    if (!firstClick) {
      await handleLoadReviews();
      setFirstClick(true);
    }
    if (selectedHotelReviews.includes(hotelName)) {
      setSelectedHotelReviews(prev => prev.filter(hotel => hotel !== hotelName));
    } else {
      setSelectedHotelReviews(prev => [...prev, hotelName]);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        hotels,
        setHotels,
        reviews,
        setReviews,
        firstClick,
        setFirstClick,
        selectedHotelReviews,
        setSelectedHotelReviews,
        handleLoadHotels,
        handleLoadReviews,
        handleShowReviews,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};
