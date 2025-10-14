import React, { useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    IconButton,
    Drawer,
    useMediaQuery, Container, Grid,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import AddIcon from "@mui/icons-material/Add";
import user from "../../assets/profile/user.png"
const AccountUI = () => {
    const [profiles, setProfiles] = useState([
        { id: 1, name: "Profile Name", isCurrent: true },
        { id: 2, name: "Profile Name", isCurrent: false },
    ]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const addProfile = () => {
        const newProfile = { id: profiles.length + 1, name: "Profile Name", isCurrent: false };
        setProfiles([...profiles, newProfile]);
    };

    const sidebar = (
        <Box
            sx={{
                borderRadius: 2,
                width: {xs:"100%",md:"310px"},
                color: "white",
            }}
        >
            <Typography
                variant="h4"
                sx={{ mb: 2, pl: 1, fontWeight: "500", color: "white" ,fontSize:"36px"}}
            >
                Account
            </Typography>
            <List disablePadding sx={{ bgcolor: "#0f0f0f", borderRadius: 2 ,p:2 ,border:"1px solid #333333"}}>
                {[
                    { text: "Membership", icon: <CreditCardIcon /> },
                    { text: "Devices", icon: <DevicesIcon /> },
                    { text: "Settings", icon: <SettingsIcon /> },
                    { text: "Profile", icon: <PersonIcon />, active: true },
                ].map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{
                            px: 1,
                            py: 1.5,
                            borderRadius: 1,
                            lineHeight:'40px',
                            cursor: "pointer",
                            color: item.active ? "white" : "#717173",
                            bgcolor: "transparent",
                            "&:hover": { color: "#fff" },
                        }}
                    >
                        <ListItemIcon
                            sx={{ minWidth: 36, color: item.active ? "white" : "#9e9e9e" }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Container maxWidth={'xl'}>
            <Box
                sx={{
                    bgcolor: "#000",
                    minHeight: "100vh",
                    color: "white",
                    py: isMobile ? 2 : 4,
                }}
            >
                <Grid container spacing={3} sx={{flexWrap:{xs:'wrap !important',md:'nowrap !important'},justifyContent:'center'}}>
                    {/* Sidebar */}
                        <Grid item xs={12} md={4} sx={{width:{xs:"100%",md:'unset'}}}>
                            {sidebar}
                        </Grid>

                    <Grid item xs={12} md={8} width={'100%'} sx={{px: {md:8}}}>
                        {/* Logged In Section */}
                        <Box
                            sx={{
                                bgcolor: "#121212",
                                borderRadius: 2,
                                p: 2,
                                mb: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                border:"1px solid #333333"
                            }}
                        >
                            <Box bgcolor={"#333333"} p={1} borderRadius={2} sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>
                                <PhoneIcon sx={{ color: "white" }} />
                            </Box>
                           <Box>
                               <Typography sx={{ color: "#999999" }}>Logged with</Typography>
                               <Typography sx={{ fontWeight: "500" ,fontSize:'20px'}}>8699780274</Typography>
                           </Box>
                        </Box>

                        {/* Manage Profiles */}
                        <Box
                            sx={{
                                bgcolor: "#121212",
                                borderRadius: 2,
                                p: 3,
                                border:"1px solid #333333"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 3,
                                }}
                            >
                                <Typography variant="h6">Manage Profiles</Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={addProfile}
                                    sx={{
                                        bgcolor: "#e50914",
                                        "&:hover": { bgcolor: "#b0060f" },
                                        textTransform: "none",
                                        borderRadius: "6px",
                                        fontWeight: "600",
                                        px: 2,
                                    }}
                                >
                                    Add New Profile
                                </Button>
                            </Box>

                            {/* Profile List */}
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {profiles.map((profile) => (
                                    <Box
                                        key={profile.id}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            borderRadius: "8px",
                                            px: 2,
                                            py: 1.5,
                                            "&:hover": { bgcolor: "#2a2a2a" },
                                            border:"1px solid #333333"
                                        }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 ,p:2}}>
                                            <Box
                                                sx={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: "6px",
                                                    bgcolor: "#9b111e",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontWeight: "bold",
                                                    fontSize: "1.2rem",
                                                    mr:1
                                                }}
                                            >
                                                <img src={user}/>
                                            </Box>
                                            <Typography>{profile.name}</Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            {profile.isCurrent && (
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        bgcolor: "#333",
                                                        color: "white",
                                                        fontSize: "0.75rem",
                                                        textTransform: "none",
                                                        "&:hover": { bgcolor: "#444" },
                                                    }}
                                                >
                                                    Your profile
                                                </Button>
                                            )}
                                            <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#999" }} />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AccountUI;

