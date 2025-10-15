// import React from 'react';
// import { useForm } from 'react-hook-form';
// import {
//     Box,
//     Button,
//     Checkbox,
//     FormControlLabel,
//     Grid,
//     Link,
//     TextField,
//     Typography,
// } from '@mui/material';
// import image from '../assets/Mask group.png';
// import logo from '../assets/Layer 1.png';
//
// const Signup = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();
//
//     const onSubmit = (data) => {
//         console.log(data);
//     };
//
//     return (
//         <Box
//             sx={{
//                 height: '100vh',
//                 backgroundColor: '#000',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//
//             }}
//         >
//             <Grid container>
//                 <Grid
//                     item
//                     size={{
//                         xs:12,
//                         md:6
//                     }}
//                     sx={{
//                         overflow: 'hidden',
//                         display: { xs: 'none', md: 'block' },
//                     }}
//                 >
//                     <img src={image} alt={'image'}/>
//                 </Grid>
//
//                 {/* Right Side - Signup Form */}
//                 <Grid
//                     item
//                     size={{
//                         xs:12,
//                         md:6
//                     }}
//                     sx={{
//                         backgroundColor: '#1a1a1a',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         px: { xs: 3, sm: 5, md: 0 },
//                     }}
//                 >
//                     <Box
//                         component="form"
//                         onSubmit={handleSubmit(onSubmit)}
//                         sx={{
//                             width: '100%',
//                             maxWidth: '450px',
//                         }}
//                     >
//                         {/* Logo */}
//                         <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <img src={logo} alt={'logo'}/>
//                         </Box>
//
//                         {/* Title & Subtitle */}
//                         <Typography
//                             variant="h5"
//                             sx={{
//                                 mb: 1,
//                                 color: '#fff',
//                                 fontWeight: 500,
//                                 fontSize: '28px',
//                             }}
//                         >
//                             Create an account
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             sx={{
//                                 mb: 4,
//                                 color: '#888',
//                                 fontSize: '14px',
//                                 lineHeight: 1.5,
//                             }}
//                         >
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                         </Typography>
//
//                         {/* Full Name Field */}
//                         <TextField
//                             fullWidth
//                             placeholder="Full Name"
//                             variant="filled"
//                             {...register('fullName', { required: 'Full name is required' })}
//                             error={!!errors.fullName}
//                             helperText={errors.fullName?.message}
//                             sx={{
//                                 mb: 2.5,
//                                 '& .MuiFilledInput-root': {
//                                     backgroundColor: '#2a2a2a',
//                                     borderRadius: '8px',
//                                     '&:hover': {
//                                         backgroundColor: '#2a2a2a',
//                                     },
//                                     '&.Mui-focused': {
//                                         backgroundColor: '#2a2a2a',
//                                     },
//                                     '&:before, &:after': {
//                                         display: 'none',
//                                     },
//                                 },
//                                 '& .MuiFilledInput-input': {
//                                     color: '#fff',
//                                     padding: '16px 14px',
//                                 },
//                                 '& .MuiInputLabel-root': {
//                                     color: '#666',
//                                 },
//                             }}
//                         />
//
//                         {/* Phone Number Field */}
//                         <TextField
//                             fullWidth
//                             placeholder="Phone Number"
//                             variant="filled"
//                             {...register('phone', { required: 'Phone number is required' })}
//                             error={!!errors.phone}
//                             helperText={errors.phone?.message}
//                             sx={{
//                                 mb: 3,
//                                 '& .MuiFilledInput-root': {
//                                     backgroundColor: '#2a2a2a',
//                                     borderRadius: '8px',
//                                     '&:hover': {
//                                         backgroundColor: '#2a2a2a',
//                                     },
//                                     '&.Mui-focused': {
//                                         backgroundColor: '#2a2a2a',
//                                     },
//                                     '&:before, &:after': {
//                                         display: 'none',
//                                     },
//                                 },
//                                 '& .MuiFilledInput-input': {
//                                     color: '#fff',
//                                     padding: '16px 14px',
//                                 },
//                                 '& .MuiInputLabel-root': {
//                                     color: '#666',
//                                 },
//                             }}
//                         />
//
//                         {/* Agreement Checkbox */}
//                         <FormControlLabel
//                             control={
//                                 <Checkbox
//                                     {...register('agree', { required: true })}
//                                     sx={{
//                                         color: '#666',
//                                         '&.Mui-checked': {
//                                             color: '#ff0000',
//                                         },
//                                         alignSelf: 'flex-start',
//                                         mt: -0.5,
//                                     }}
//                                 />
//                             }
//                             label={
//                                 <Typography variant="body2" sx={{ color: '#999', fontSize: '13px', lineHeight: 1.6 }}>
//                                     You have agreed to Speedo Prime{' '}
//                                     <Link
//                                         href="#"
//                                         sx={{
//                                             color: '#ff0000',
//                                             textDecoration: 'none',
//                                             '&:hover': {
//                                                 textDecoration: 'underline',
//                                             },
//                                         }}
//                                     >
//                                         Privacy Policy, Rules and Regulation
//                                     </Link>
//                                     , that you will abide by all the internal updates and policies of the platform.
//                                 </Typography>
//                             }
//                             sx={{
//                                 alignItems: 'flex-start',
//                                 mb: 3,
//                                 ml: 0,
//                             }}
//                         />
//                         {errors.agree && (
//                             <Typography color="error" variant="caption" sx={{ display: 'block', mb: 2, mt: -2 }}>
//                                 You must agree before continuing.
//                             </Typography>
//                         )}
//
//                         {/* Submit Button */}
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{
//                                 backgroundColor: '#ff0000',
//                                 color: '#fff',
//                                 py: 1.8,
//                                 fontWeight: 600,
//                                 fontSize: '16px',
//                                 textTransform: 'none',
//                                 borderRadius: '8px',
//                                 '&:hover': {
//                                     backgroundColor: '#cc0000',
//                                 },
//                                 mb: 3,
//                                 boxShadow: 'none',
//                             }}
//                         >
//                             Verify Account
//                         </Button>
//
//                         {/* Login Link */}
//                         <Typography
//                             variant="body2"
//                             sx={{
//                                 color: '#888',
//                                 fontSize: '14px',
//                             }}
//                         >
//                             Already have account?{' '}
//                             <Box>
//                                 <Link
//                                     href="#"
//                                     sx={{
//                                         color: '#ff0000',
//                                         textDecoration: 'none',
//                                         fontWeight: 500,
//                                         '&:hover': {
//                                             textDecoration: 'underline',
//                                         },
//                                     }}
//                                 >
//                                     Login
//                                 </Link>
//                             </Box>
//                         </Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };
//
// export default Signup;

import React from 'react';
import { useForm } from 'react-hook-form';
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
import image from '../../assets/signup/Mask group.png';
import logo from '../../assets/signup/Layer 1.png';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box
            id={"signup"}
            sx={{
                minHeight: '100vh',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <Grid container sx={{ height: '100vh',py:8 }}>
                {/* Left Side - Image */}
                <Grid
                    item
                    size={{
                        xs:12,
                        md:6
                    }}
                    sx={{
                        overflow: 'hidden',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000',
                    }}
                >
                    <img
                        src={image}
                        alt="Movies collage"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                {/* Right Side - Signup Form */}
                <Grid
                    item
                    size={{
                        xs:12,
                        md:6
                    }}
                    sx={{
                        backgroundColor: '#1a1a1a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: { xs: 3, sm: 5, md: 6, lg: 10 },
                        py: { xs: 4, md: 0 },
                        borderTopRightRadius:5,
                        borderBottomRightRadius:5,
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            width: '100%',
                            maxWidth: { xs: '450px', md: '400px', lg: '480px' },
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                            <img
                                src={logo}
                                alt="Speedo Prime logo"
                                style={{ maxWidth: '180px', height: 'auto' }}
                            />
                        </Box>

                        {/* Title & Subtitle */}
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 1,
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: { xs: '24px', md: '28px' },
                            }}
                        >
                            Create an account
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 4,
                                color: '#888',
                                fontSize: '14px',
                                lineHeight: 1.6,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Typography>

                        {/* Full Name Field */}
                        <TextField
                            fullWidth
                            placeholder="Full Name"
                            variant="filled"
                            {...register('fullName', { required: 'Full name is required' })}
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message}
                            sx={{
                                mb: 2.5,
                                '& .MuiFilledInput-root': {
                                    backgroundColor: '#2a2a2a',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#2a2a2a',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: '#2a2a2a',
                                    },
                                    '&:before, &:after': {
                                        display: 'none',
                                    },
                                },
                                '& .MuiFilledInput-input': {
                                    color: '#fff',
                                    padding: '16px 14px',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#666',
                                    opacity: 1,
                                },
                                '& .MuiFormHelperText-root': {
                                    ml: 0,
                                },
                            }}
                        />

                        {/* Phone Number Field */}
                        <TextField
                            fullWidth
                            placeholder="Phone Number"
                            variant="filled"
                            {...register('phone', { required: 'Phone number is required' })}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            sx={{
                                mb: 3,
                                '& .MuiFilledInput-root': {
                                    backgroundColor: '#2a2a2a',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#2a2a2a',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: '#2a2a2a',
                                    },
                                    '&:before, &:after': {
                                        display: 'none',
                                    },
                                },
                                '& .MuiFilledInput-input': {
                                    color: '#fff',
                                    padding: '16px 14px',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#666',
                                    opacity: 1,
                                },
                                '& .MuiFormHelperText-root': {
                                    ml: 0,
                                },
                            }}
                        />

                        {/* Agreement Checkbox */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...register('agree', { required: true })}
                                    sx={{
                                        color: '#666',
                                        '&.Mui-checked': {
                                            color: '#ff0000',
                                        },
                                        alignSelf: 'flex-start',
                                        mt: -0.5,
                                        p: 0.5,
                                    }}
                                />
                            }
                            label={
                                <Typography variant="body2" sx={{ color: '#fff', fontSize: '13px', lineHeight: 1.6 }}>
                                    You have agreed to Speedo Prime{' '}
                                    <Link
                                        href="#"
                                        sx={{
                                            color: '#ff0000',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        Privacy Policy, Rules and Regulation
                                    </Link>
                                    , that you will abide by all the internal updates and policies of the platform.
                                </Typography>
                            }
                            sx={{
                                alignItems: 'flex-start',
                                mb: errors.agree ? 1 : 3,
                                ml: 0,
                            }}
                        />
                        {errors.agree && (
                            <Typography color="error" variant="caption" sx={{ display: 'block', mb: 2 }}>
                                You must agree before continuing.
                            </Typography>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#ff0000',
                                color: '#fff',
                                py: 1.8,
                                fontWeight: 600,
                                fontSize: '16px',
                                textTransform: 'none',
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: '#cc0000',
                                },
                                mb: 3,
                                boxShadow: 'none',
                            }}
                        >
                            Verify Account
                        </Button>

                        {/* Login Link */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#888',
                                fontSize: '14px',
                                textAlign: { xs: 'center', md: 'left' },
                                display: {xs:'flex',md:'block'},
                                alignItems: 'center'
                            }}
                        >
                            Already have account?{' '}
                            <Typography>
                                <Link
                                    href="#"
                                    sx={{
                                        color: '#ff0000',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                        ml: {xs:1,md:0}
                                    }}
                                >
                                    Login
                                </Link>
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Signup;