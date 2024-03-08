import { Box, Grid } from '@mui/material'
import { ImageContainerProps } from '../../types/ComponentProps'

const ImageContainer = ({url, name}: ImageContainerProps) => {
    return (
        <Grid item xs={12} md={6}>
            <Box style={{ position: 'relative', paddingBottom: '75%', height: 0 }}>
                <img src={url} alt={name} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, objectFit: 'cover' }} />
            </Box>
        </Grid>
    )
}

export default ImageContainer
