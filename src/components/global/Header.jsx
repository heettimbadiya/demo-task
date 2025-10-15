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
    Button,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    GridView as GridViewIcon,
    Mic as MicIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import logo from '../../assets/signup/Layer 1.png';
import user from "../../assets/profile/user.png"
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

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
                            onClick={() => navigate('/')}
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
            <Box
                position="fixed"
                sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)',
                    boxShadow: 'none',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: { xs: 2, md: 4 } }}>
                    {/* Left Side: Menu Icon (mobile) + Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button
                            onClick={handleDrawerToggle}
                            startIcon={<MenuIcon />}
                            sx={{
                                color: '#fff',
                                borderColor: 'rgba(255,255,255,0.3)',
                                display: { xs: 'flex', lg: 'none' },
                                textTransform: 'none',
                                mr: 1
                            }}
                            size="small"
                        >
                        </Button>
                        <img src={logo} alt="Speedo Prime" style={{ height: '50px' }} />
                        <Box
                            sx={{
                                display: { xs: 'none', lg: 'flex' },
                                gap: 3,
                                flex: 1,
                                justifyContent: 'center',
                                ml:2
                            }}
                        >
                            {navLinks.map((link) => (
                                <Typography
                                    key={link}
                                    onClick={() => navigate('/')}
                                    sx={{
                                        color: link === 'Browse by language' ? '#ff3d3d' : '#fff',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        '&:hover': { color: '#ff3d3d' },
                                        transition: 'color 0.3s',
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    {/* Middle: Navigation Links (hidden on mobile) */}


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
                        <IconButton onClick={() => navigate('/sign-up')} sx={{ color: '#fff' }}>
                            <NotificationsIcon />
                        </IconButton>
                        <Avatar
                            src={user}
                            onClick={() => navigate('/profile')}
                            sx={{
                                width: 35,
                                height: 35,
                                backgroundColor: '#8B0000',
                                ml: 1,
                                cursor: 'pointer',
                            }}
                        />
                    </Box>
                </Toolbar>
            </Box>

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
