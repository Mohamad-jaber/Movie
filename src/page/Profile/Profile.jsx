import React from 'react';
import { Container, Box, Card, CardContent, Avatar, Typography } from '@mui/material';

const ProfilePage = () => {
    const user = {
        name: 'Name',
        email: localStorage.getItem('email') ?? "",
    };

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                }}
            >
                <Card sx={{ width: 500, boxShadow: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                        <Avatar
                            alt={user.name}
                            sx={{ width: 200, height: 200 }}
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="h5" component="div" align="center">
                            {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                            Email: {user.email}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default ProfilePage;
