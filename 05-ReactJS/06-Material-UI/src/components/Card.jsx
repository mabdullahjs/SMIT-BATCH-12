import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

export default function ImgMediaCard({ title, description, image }) {
    const [loading, setLoading] = React.useState(false);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => setLoading(!loading)} disabled={false} loadingIndicator={<CircularProgress color="primary" size={25} />} loading={loading} variant='contained' size="large">Add To Cart</Button>
            </CardActions>
        </Card>
    );
}
