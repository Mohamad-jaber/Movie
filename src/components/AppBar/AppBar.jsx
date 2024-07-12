import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const PrimarySearchAppBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const isTabletOrLess = useMediaQuery(theme.breakpoints.down('md'));

    const handleSearch = () => {
        if (searchQuery.length > 0) {
            const fetchData = async () => {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=ad2e4f85e87dc071d546d2930fef7a1a`);
                const data = await response.json();
                setResults(data.results);
                setAnchorEl(document.getElementById('search-input'));
            };

            fetchData();
        } else {
            setResults([]);
            setAnchorEl(null);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (id, title) => {
        const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
        const movieEntry = { id, name: title };
        const isDuplicate = storedHistory.some(entry => entry.id === id);
        if (!isDuplicate) {
            storedHistory.push(movieEntry);
            localStorage.setItem('history', JSON.stringify(storedHistory));
        }
        setAnchorEl(null);
        setSearchQuery("");
        navigate(`/details?MovieId=${id}`);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={() => navigate("/movies")}
                    >
                        Movies
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            id="search-input"
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </Search>
                    <Button variant="contained" sx={{ backgroundColor: "white", color: "black" }} onClick={handleSearch}>
                        Search
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    {isTabletOrLess ? (
                        <Box>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={mobileMenuAnchorEl}
                                open={Boolean(mobileMenuAnchorEl)}
                                onClose={handleMobileMenuClose}
                            >
                                <MenuItem onClick={() => navigate('/history')}>History</MenuItem>
                                <MenuItem onClick={() => navigate('/favorite')}>Favorites</MenuItem>
                                <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                            </Menu>
                        </Box>
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => navigate('/history')}>
                                History
                            </Button>
                            <Button color="inherit" onClick={() => navigate('/favorite')}>
                                Favorites
                            </Button>
                            <Box>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={() => { navigate('/profile') }}
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'search-input',
                }}
            >
                {results.map((result) => (
                    <MenuItem key={result.id} onClick={() => handleMenuItemClick(result.id, result.original_title)}>
                        {result.original_title}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default PrimarySearchAppBar;
