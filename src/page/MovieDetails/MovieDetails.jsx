import React, { useEffect } from 'react';
import { Container, Box, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useGetMovieDetailsAPI from './hooks/useGetMovieDetailsAPI';
import BlockUI from '../../components/BlockUI/BlockUI';

const MovieDetails = () => {
    const location = useLocation();
    const url = new URL(window.location.href);
    const urlMovieId = url.searchParams.get("MovieId") ?? -1;
    const { Movie, isFetching, refetch } = useGetMovieDetailsAPI(urlMovieId);

    const theme = useTheme();
    const isTabletOrLess = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        refetch();
    }, [urlMovieId, location.search]);  // Add location.search to dependencies

    useEffect(() => {
        if (urlMovieId !== -1 && Movie?.original_title) {
            const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
            const movieEntry = { id: urlMovieId, name: Movie.original_title };
            if (!storedHistory.some(entry => entry.id === urlMovieId)) {
                storedHistory.push(movieEntry);
                localStorage.setItem('history', JSON.stringify(storedHistory));
            }
        }
    }, [Movie]);

    if (isFetching) return <BlockUI />

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    paddingTop: 8,
                }}
            >
                <Grid container spacing={2} sx={{ maxWidth: 'lg' }}>
                    <Grid item xs={12} md={4}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
                            alt={Movie.original_title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: isTabletOrLess ? '300px' : 'auto', // Adjust maxHeight as needed
                                borderRadius: '8px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    {Movie.original_title}
                                </Typography>
                                <Typography variant="h6" color="text.secondary" gutterBottom>
                                    {Movie.tagline}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                                    {Movie?.genres?.map((genre) => (
                                        <Chip label={genre.name} key={genre.id} color="primary" />
                                    ))}
                                </Box>
                                <Typography variant="body1">
                                    <strong>Vote: </strong>{Movie.vote_average}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Original Language: </strong>{Movie.original_language}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Release Date: </strong>{Movie.release_date}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Status: </strong>{Movie.status}
                                </Typography>
                                <Typography variant="body2" sx={{ marginTop: 2 }}>
                                    {Movie.overview}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default MovieDetails;
