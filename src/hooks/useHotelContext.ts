import { useContext } from 'react';
import { HotelContextType, HotelContext } from '../context/HotelProvider';

export const useHotelContext = (): HotelContextType => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error('useHotelContext must be used within a HotelProvider');
  }
  return context;
};
