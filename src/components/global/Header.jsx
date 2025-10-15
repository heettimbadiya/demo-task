import React, { useState } from 'react';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    GridView as GridViewIcon,
    Mic as MicIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import logo from '../../assets/signup/Layer 1.png';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navLinks = [
        'Home',
        'Movies',
        'TV Shows',
        'New/Upcoming',
        'My List',
        'Browse by language',
        'Speedo Tube',
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <Box sx={{ p: 2 }}>
                <img src={logo} alt="Speedo Prime" style={{ height: '40px' }} />
            </Box>
            <Divider />
            <List>
                {navLinks.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                                fontSize: 16,
                                color: text === 'Browse by language' ? '#ff0000' : '#fff',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#000',
                    boxShadow: 'none',
                    borderBottom: '1px solid #1a1a1a',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    {/* Left Side: Menu Icon (mobile) + Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="Speedo Prime" style={{ height: '40px' }} />
                    </Box>

                    {/* Middle: Navigation Links (hidden on mobile) */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 3,
                            flex: 1,
                            justifyContent: 'center',
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

                    {/* Right Side: Icons + Avatar */}
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

            {/* Drawer for Mobile */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: { backgroundColor: '#111', color: 'white' },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
