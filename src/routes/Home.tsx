import { Button, Box, } from '@mui/material';
import HotelCards from '../components/HotelCards';
import { useHotelContext } from '../hooks/useHotelContext';

const Home = () => {
    const { handleLoadHotels } = useHotelContext();

    return (
        <Box>
            <Button variant="contained" onClick={handleLoadHotels} sx={{ marginBottom: 2, textTransform: 'none', fontWeight: 'bold' }}>Load Hotels</Button>
            <HotelCards />
        </Box>
    );
};

export default Home;
