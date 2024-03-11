import React, { createContext, useState, ReactNode } from 'react';
import { Hotel } from '../types/Hotel';
import { Review } from '../types/Reviews';
import useContentful from '../hooks/useContentful';
import { HotelContextType } from '../types/HotelProvider';

export const HotelContext = createContext<HotelContextType | undefined>(undefined);


interface HotelProviderProps {
  children: ReactNode;
}

export const HotelProvider: React.FC<HotelProviderProps> = ({ children }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [firstClick, setFirstClick] = useState(false);
  const [selectedHotelReviews, setSelectedHotelReviews] = useState<string[]>([]);

  const { getHotels, getReviews } = useContentful();

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
