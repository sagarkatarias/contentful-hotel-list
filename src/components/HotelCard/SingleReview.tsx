import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';
import { SingleReviewProps } from '../../types/ComponentProps';

const SingleReview = ({ review }: SingleReviewProps) => {
    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <img src={review.feedback === "positive" ? Plus : Minus} alt="Plus Icon" width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                    primary={
                        <>
                            <Typography variant="h6">
                                {`${review.customer.firstName} ${review.customer.lastName}`}
                            </Typography>
                            <Typography variant="body2" >{review.comment}</Typography>
                        </>
                    }
                />
            </ListItem>
        </>
    )
}

export default SingleReview
