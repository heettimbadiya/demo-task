import React from 'react';
import {useForm} from 'react-hook-form';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import image from '../assets/Mask group.png'
import logo from '../assets/Layer 1.png'


const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Submit your data
    };

    return (
        <Box
            sx={{
                p: '90px',                    // Your requested padding
                height: 'calc(100vh - 180px)', // Adjust height to fit with padding
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >
        <Grid container>
                <Grid
                    item
                    size={{
                        xs: 12,
                        md: 6
                    }}
                >
                    <img src={image} alt={'image'}/>
                </Grid>

                <Grid
                    item
                    size={{
                        xs: 12,
                        md: 6
                    }}
                    sx={{
                        backgroundColor: '#151515',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            width: '100%',
                            px: 4,
                        }}
                    >
                        {/* Logo */}
                        <Typography
                            variant="h4"
                        >
                            <img src={logo} alt={'logo'}/>
                        </Typography>

                        {/* Title & Subtitle */}
                        <Typography variant="h6" sx={{mb: 1}}>
                            Create an account
                        </Typography>
                        <Typography variant="body2" sx={{mb: 3, color: '#aaa'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Typography>

                        {/* Full Name Field */}
                        <TextField
                            fullWidth
                            label="Full Name"
                            variant="filled"
                            {...register('fullName', {required: true})}
                            error={!!errors.fullName}
                            helperText={errors.fullName && 'Full name is required'}
                            InputProps={{style: {color: '#fff'}}}
                            InputLabelProps={{style: {color: '#aaa'}}}
                            sx={{mb: 2, backgroundColor: '#1a1a1a'}}
                        />

                        {/* Phone Number Field */}
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="filled"
                            {...register('phone', {required: true})}
                            error={!!errors.phone}
                            helperText={errors.phone && 'Phone number is required'}
                            InputProps={{style: {color: '#fff'}}}
                            InputLabelProps={{style: {color: '#aaa'}}}
                            sx={{mb: 2, backgroundColor: '#1a1a1a'}}
                        />

                        {/* Agreement Checkbox */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...register('agree', {required: true})}
                                    sx={{color: 'red'}}
                                />
                            }
                            label={
                                <Typography variant="body2" sx={{color: '#aaa'}}>
                                    You have agreed to Speedo Prime{' '}
                                    <Link href="#" sx={{color: '#fff'}} underline="hover">
                                        Privacy Policy, Rules and Regulation
                                    </Link>, that you will abide by all the internal updates and policies of the
                                    platform.
                                </Typography>
                            }
                            sx={{alignItems: 'flex-start', mb: 2}}
                        />
                        {errors.agree && (
                            <Typography color="error" variant="caption">
                                You must agree before continuing.
                            </Typography>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: 'red',
                                color: '#fff',
                                py: 1.5,
                                fontWeight: 'bold',
                                '&:hover': {backgroundColor: '#cc0000'},
                                mt: 1,
                            }}
                        >
                            Verify Account
                        </Button>

                        {/* Login Link */}
                        <Typography variant="body2" sx={{mt: 2, textAlign: 'center'}}>
                            Already have account?{' '}
                            <Link href="#" sx={{color: 'red'}} underline="hover">
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignupPage;
