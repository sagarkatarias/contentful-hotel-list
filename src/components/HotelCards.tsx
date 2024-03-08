import React from 'react'
import { Hotel } from '../types/Hotel'
import { Card, CardContent, Collapse, Divider, Grid, List } from '@mui/material'
import { Review } from '../types/Reviews'
import { filterReviews } from '../utils/filters'
import ImageContainer from './HotelCard/ImageContainer'
import HotelDescriptionContainer from './HotelCard/HotelDescriptionContainer'
import SingleReview from './HotelCard/SingleReview'
import { useHotelContext } from '../hooks/useHotelContext'

const HotelCards = () => {
    const {  hotels, selectedHotelReviews, reviews} = useHotelContext();
    return (
        <Grid container spacing={3}>
            {hotels.map((hotel: Hotel, index: number) => (
                <Grid item key={index} sx={{ textAlign: 'left' }}>
                    <Card sx={{ bgcolor: "grey.100" }}>
                        <CardContent sx={{ padding: 0 }} className="custom-card-content">
                            <Grid container spacing={2}>
                                <ImageContainer url={hotel.images.url} name={hotel.name} />
                                <HotelDescriptionContainer  hotel={hotel}/>
                            </Grid>
                            <Collapse in={selectedHotelReviews.includes(hotel.name)} timeout="auto" unmountOnExit sx={{ bgcolor: "grey.300" }}>
                                <List >
                                    {filterReviews(reviews, hotel.name).map((review: Review, index: number, array: string | any[]) => (
                                        <React.Fragment key={index}>
                                            <SingleReview review={review} />
                                            {index !== array.length - 1 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Collapse>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default HotelCards
