import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
        setHistory(storedHistory);
    }, []);

    const handleItemClick = (id) => {
        navigate(`/details?MovieId=${id}`);
    };

    return (
        <Container>
            <Typography variant="h4" component="div" gutterBottom sx={{ marginTop: "50px" }}>
                Movie History
            </Typography>
            <List>
                {history.map((movie, index) => (
                    <ListItem button key={movie.id} onClick={() => handleItemClick(movie.id)}>
                        <ListItemText primary={`${index + 1}. ${movie.name}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default History;
