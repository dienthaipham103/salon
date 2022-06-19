import React from 'react';
import Box from '@mui/material/Box';
import './styles.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const TITLES = {'signup': 'Sign up', 'login': 'Log in'};
const BOX_INFO = [
    {
        title: 'For everyone',
        text: 'Book salons and spas near you',
        color: '#000',
        backgroundColor: '#fff'
    },
    {
        title: 'For businesses',
        text: 'Manage and grow your business',
        color: '#fff',
        backgroundColor: '#000'
    },
]

function UserTypeBox({title, text, color, backgroundColor}) {
    return (
        <Box component='div' className='userType-box' sx={{backgroundColor: backgroundColor}}>
            <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: color}}>
                <Box component='div' sx={{textAlign: 'left'}}>
                    <Typography sx={{fontSize: '28px',  fontWeight: 700, lineHeight: '32px'}}>
                        {title}
                    </Typography>
                    <Typography sx={{fontSize: '16px',  fontWeight: 400, marginTop: '8px' }}>{text}</Typography>
                </Box>
                <ArrowForwardIcon sx={{fontSize: '28px'}}/>
            </Box>
        </Box>
    )
}

function SwitchUserType(props) {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <Box component="div" className='switchUser-wrapper'>
            <ArrowBackIcon 
                sx={{cursor: 'pointer', fontSize: '36px', marginBottom: '20px' }}
                onClick={() => navigate('/')}
            />
            <Box component="div" className='switchUser-content'>
                <Box component="div" className='switchUser-content__box'>
                    <Typography variant='h5' sx={{paddingBottom: '40px'}}>
                        {TITLES[params.action]}
                    </Typography>
                    <UserTypeBox {...BOX_INFO[0]}/>
                    <UserTypeBox {...BOX_INFO[1]}/>
                </Box>
            </Box>
        </Box>
    );
}

export default SwitchUserType;