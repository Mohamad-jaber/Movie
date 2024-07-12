import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Card, CardMedia, CardContent, Container, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useGetMoviesAPI from './hooks/useGetMoviesAPI';

const FavoriteMovies = () => {
    const { Movies, isFetching } = useGetMoviesAPI();
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favoriteMovies')) || []);

    // Save favorites to local storage whenever the favorites state changes
    useEffect(() => {
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => {
            const isFavorite = prevFavorites.includes(id);
            if (isFavorite) {
                // Remove the movie from favorites
                return prevFavorites.filter(favId => favId !== id);
            } else {
                // Add the movie to favorites
                return [...prevFavorites, id];
            }
        });
    };

    const handleCardClick = (id) => {
        navigate(`/details?MovieId=${id}`);
    };

    const renderItems = (items) => {
        return items
            .filter(item => favorites.includes(item.id)) // Filter only favorite movies
            .map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card 
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                        onClick={() => handleCardClick(item.id)}
                    >
                        <CardMedia
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={item.title}
                            sx={{ height: '400px' }}
                        />
                        <CardContent >
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={10} >
                                    <Typography variant="body2" color="text.secondary" >
                                        {item.original_title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(item.id);
                                        }}
                                        align="center"
                                    >
                                        <FavoriteIcon color="error" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom sx={{marginTop:"50px"}}>
                Favorite Movies
            </Typography>
            <Grid container spacing={2}>
                {renderItems(Movies)}
            </Grid>
        </Container>
    );
};

export default FavoriteMovies;
