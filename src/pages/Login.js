import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function Login() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
                <Box sx={{ height: '300px', width: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                    <Typography variant='h1' sx={{ color: '#1565c0', fontSize: '100px', fontWeight: 600, mb: 3 }}>
                        404
                    </Typography>

                    <Typography variant='h3' sx={{ fontSize: '30px', fontWeight: 600 }}>
                        Login Feature Soon!
                    </Typography>
                    <Typography variant='p' sx={{ color: 'gray', fontSize: '19px', mt: 1 }}>
                        The page you are looking for does not exist.
                    </Typography>
                    <Button variant='contained' href="\" sx={{ mt: 3 }}>Back To Home</Button>
                </Box>
            </Box>
        </>
    );
}

export default Login;
