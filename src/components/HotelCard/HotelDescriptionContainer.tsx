import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import { convertToSymbol } from '../../utils/currency'
import { useHotelContext } from '../../hooks/useHotelContext'
import { HotelDescriptionContainerProps } from '../../types/ComponentProps';

const HotelDescriptionContainer = ({ hotel }: HotelDescriptionContainerProps) => {
    const { handleShowReviews, selectedHotelReviews } = useHotelContext();
    return (
        <Grid item xs={12} md={6} sx={{ paddingRight: 2, marginTop: 5, marginLeft: { md: 2 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant="h4" component="div">{hotel.name}</Typography>
                        <Rating value={hotel.rating} readOnly />
                    </Box>
                    <Typography variant="body2" marginTop={-1}>{hotel.city} - {hotel.country} </Typography>
                    <Typography variant="body2" marginTop={3}>{hotel.description}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 }}>
                    <Button className='btn' onClick={() => handleShowReviews(hotel.name)} variant='contained' sx={{ marginX: 0, marginY: 2, textTransform: 'none', fontWeight: 'bold' }}>{selectedHotelReviews.includes(hotel.name) ? 'Hide reviews' : 'Show reviews'}</Button>
                    <Box className='right' sx={{ marginLeft: 'auto' }}>
                        <Typography variant="h6" textAlign={'right'}>{hotel.price.value} {convertToSymbol(hotel.price.currency)}</Typography>
                        <Typography color="text.secondary" fontSize={13}>{hotel.startDate} - {hotel.endDate}</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default HotelDescriptionContainer
