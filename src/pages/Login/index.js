import React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './styles.scss';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

function CustomButton({text, variant}) {
    return (
        <Button variant={variant} sx={{width: '100%', textTransform: 'none', height: '42px'}}>{text}</Button>
    )
}

function Login(props) {
    const navigate = useNavigate();

    return (
        <Box compoment='div' className='login-wrapper'>
            <Box component='div' className='login-content'>
                <Box component='div' className='login-content__appName'>
                    <ArrowBackIcon sx={{cursor: 'pointer'}} onClick={() => navigate('/')}/>
                    <Typography sx={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}>Salon App</Typography>
                </Box>
                <Box component='div' className='login-content__loginType'>
                    <Typography variant='h6' sx={{fontWeight: 800, paddingBottom: '8px'}}>Login as a customer</Typography>
                    <Typography sx={{color: 'rgb(135, 140, 147)', fontSize: '15px'}}>Log in or sign up to book your first treatment today!</Typography>
                    <Box component='div' className='loginType-buttonWrapper'>
                        <CustomButton text='Log in with email' variant='contained' />
                    </Box>
                    <Box component='div' className='loginType-buttonWrapper'>
                        <CustomButton text='Continue with Google' variant='outlined' />
                    </Box>
                    <Box component='div' className='noAccount-text'>
                        <Typography sx={{fontSize: '15px'}}>Don' t have a customer account</Typography>
                        <Link to='/'>Sign up now</Link>
                    </Box>
                </Box>
                <Box component='div' className='login-content__loginType' sx={{marginTop: '30px', textAlign: 'center'}}>
                    <Typography variant='h6' sx={{fontWeight: 800, paddingBottom: '8px'}}>Login for businesses</Typography>
                    <Typography sx={{color: 'rgb(135, 140, 147)', fontSize: '15px'}}>To access your business account please go to the</Typography>
                    <Link to='/'>business login page</Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;