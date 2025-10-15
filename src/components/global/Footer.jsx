import React from 'react';
import {Box, Container, Grid, Typography, Link, Button} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import logo from '../../assets/signup/Layer 1.png';

function Footer({show}) {
    const footerLinks = {
        quickLinks: [
            {text: 'About Us', href: '#'},
            {text: 'Blog', href: '#'},
            {text: 'Pricing Plan', href: '#'},
            {text: 'Pricing Plan', href: '#'},
            {text: 'FAQ', href: '#'}
        ],
        moviesToWatch1: [
            {text: 'Top Trending', href: '#'},
            {text: 'Recommended', href: '#'},
            {text: 'Popular', href: '#'}
        ],
        moviesToWatch2: [
            {text: 'Top Trending', href: '#'},
            {text: 'Recommended', href: '#'},
            {text: 'Popular', href: '#'}
        ],
        aboutCompany: [
            {text: 'Contact Us', href: '#'},
            {text: 'Privacy Policy', href: '#'},
            {text: 'Terms Of Use', href: '#'}
        ]
    };

    const bottomLinks = [
        {text: 'Terms Of Use', href: '#'},
        {text: 'Privacy', href: '#'},
        {text: 'Policy', href: '#'},
        {text: 'FAQ', href: '#'}
    ];

    return (
        <Box sx={{backgroundColor: '#000', color: '#fff', pt: 6, pb: 3 , px: {xs:2 , md:5 , lg:8}}}>
            { show && <Grid container spacing={4}>
                {/* Logo and Contact Section */}
                <Grid item size={{xs: 12, md: 4, lg: 1.8}}>
                    <Box sx={{mb: 3}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <img src={logo} alt={'logo'}/>
                        </Box>
                    </Box>
                    <Box sx={{mt: 4}}>
                        <Typography variant="body2" sx={{color: '#aaa', mb: 0.5, fontSize: '14px'}}>
                            Email us:
                        </Typography>
                        <Typography variant="body2" sx={{color: '#fff', mb: 2, fontSize: '14px'}}>
                            Info@loremipsum.in
                        </Typography>
                        <Typography variant="body2" sx={{color: '#aaa', mb: 0.5, fontSize: '14px'}}>
                            Contact Us:
                        </Typography>
                        <Typography variant="body2" sx={{color: '#fff', fontSize: '14px'}}>
                            +91 123 456 7890
                        </Typography>
                    </Box>
                </Grid>

                {/* Quick Links */}
                <Grid item size={{xs: 12, md: 4, lg: 1.8}}>
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600, fontSize: '16px'}}>
                        Quick Links
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5}}>
                        {footerLinks.quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                sx={{
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    '&:hover': {color: '#fff'}
                                }}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Movies To Watch 1 */}
                <Grid item size={{xs: 12, md: 4, lg: 1.8}}>
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600, fontSize: '16px'}}>
                        Movies To Watch
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5}}>
                        {footerLinks.moviesToWatch1.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                sx={{
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    '&:hover': {color: '#fff'}
                                }}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Movies To Watch 2 */}
                <Grid item size={{xs: 12, md: 4, lg: 1.8}}>
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600, fontSize: '16px'}}>
                        Movies To Watch
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5}}>
                        {footerLinks.moviesToWatch2.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                sx={{
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    '&:hover': {color: '#fff'}
                                }}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* About Company and Download Section */}
                <Grid item size={{xs: 12, md: 4, lg: 1.8}}>
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 600, fontSize: '16px'}}>
                        About Company
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4}}>
                        {footerLinks.aboutCompany.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                sx={{
                                    color: '#aaa',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    '&:hover': {color: '#fff'}
                                }}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                </Grid>
                <Grid item size={{xs: 12, md: 4, lg: 3}}>
                    <Typography variant="body2" sx={{mb: 2, fontSize: '14px', fontWeight: 600}}>
                        Download the app
                        <br/>
                        forStreaming
                    </Typography>
                    <Box sx={{display: 'flex', gap: 1.5}}>
                        <Button
                            variant="contained"
                            startIcon={<AppleIcon/>}
                            sx={{
                                backgroundColor: '#ff0000',
                                color: '#fff',
                                textTransform: 'none',
                                fontSize: '14px',
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: '8px',
                                '&:hover': {backgroundColor: '#cc0000'}
                            }}
                        >
                            App Store
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<AndroidIcon/>}
                            sx={{
                                borderColor: '#fff',
                                color: '#fff',
                                textTransform: 'none',
                                fontSize: '14px',
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: '8px',
                                '&:hover': {borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)'}
                            }}
                        >
                            Google Play
                        </Button>
                    </Box>
                </Grid>
            </Grid>}

            {/* Bottom Section */}
            <Box
                sx={{
                    mt: 6,
                    pt: 3,
                    borderTop: '1px solid #333',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2
                }}
            >
                <Typography variant="body2" sx={{color: '#aaa', fontSize: '13px'}}>
                    © 2025 Speedo Prime. All Rights Reserved.
                </Typography>
                <Box sx={{display: 'flex', gap: 3}}>
                    {bottomLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            sx={{
                                color: '#aaa',
                                textDecoration: 'none',
                                fontSize: '13px',
                                '&:hover': {color: '#fff'}
                            }}
                        >
                            {link.text}
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;