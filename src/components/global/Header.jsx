import React from 'react';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Avatar,
} from '@mui/material';
import {
    Search as SearchIcon,
    GridView as GridViewIcon,
    Mic as MicIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import logo from '../../assets/signup/Layer 1.png';

const Header = () => {
    const navLinks = [
        'Home',
        'Movies',
        'TV Shows',
        'New/Upcoming',
        'My List',
        'Browse by language',
        'Speedo Tube',
    ];

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#000',
                boxShadow: 'none',
                borderBottom: '1px solid #1a1a1a'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Speedo Prime" style={{ height: '40px' }} />
                </Box>

                {/* Navigation Links - Hidden on mobile */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: 3,
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    {navLinks.map((link) => (
                        <Typography
                            key={link}
                            sx={{
                                color: link === 'Browse by language' ? '#ff0000' : '#fff',
                                fontSize: '14px',
                                cursor: 'pointer',
                                '&:hover': { color: '#ff0000' },
                                transition: 'color 0.3s',
                            }}
                        >
                            {link}
                        </Typography>
                    ))}
                </Box>

                {/* Right Side Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton sx={{ color: '#fff' }}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#fff', display: { xs: 'none', sm: 'flex' } }}>
                        <GridViewIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#fff', display: { xs: 'none', sm: 'flex' } }}>
                        <MicIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#fff' }}>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar
                        sx={{
                            width: 35,
                            height: 35,
                            backgroundColor: '#8B0000',
                            ml: 1,
                        }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;