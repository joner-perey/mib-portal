import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import logo from '../images/logo.png';
import { List, ListItem, Typography } from '@mui/material';
import Link from '@mui/material/Link'; // Import the Link component

import '../App.css';
import EyeBallLogo from '../images/eyeball-logo.png';
import HrLogo from '../images/hr-logo.png';
import CmsLogo from '../images/cms-logo.png';

function Home() {
    return (
        <>
            <AppBar position="sticky" sx={{ background: '#fff', color: '#000', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', px: '15%', backgroundColor: '#fff' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Box>
                            <img src={logo} alt="Logo" width="120" height="70" />
                        </Box>

                        <List sx={{ display: 'flex', flexDirection: 'row' }}>
                            <ListItem>
                                <a href='#' className='link'>Home</a>
                            </ListItem>
                            <ListItem>
                                <a href='#' className='link'>Internals</a>
                            </ListItem>
                            <ListItem>
                                <a href='#' className='link'>Externals</a>
                            </ListItem>
                        </List>

                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant="contained" href="\login" sx={{ height: '45px' }}>
                                Login
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box sx={{ height: '80vh', p: 5 }}>
                <Typography sx={{ textAlign: 'center' }}>
                    <h1>Internals Apps</h1>
                </Typography>
                <Box sx={{ p: '2% 18%', color: '#333', display: 'flex', flexDirection: 'row', gap: 3 }}>
                    <Link href="https://www.example.com" color="inherit" underline="none" sx={{
                        display: 'block',
                        width: '35%',
                    }}>
                        <Box sx={{
                            display: 'block',
                            height: '200px',
                            borderRadius: '5px',
                            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;',
                            transition: 'transform 250ms',
                            '&:hover': {
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                cursor: 'pointer',
                                transform: 'translateY(-5px)'
                            },
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'column',
                            p: '30px',
                            background: '#fff'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <img src={EyeBallLogo} class="eyeball-logo" alt="" />
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography variant='h3' sx={{ fontSize: '19px', fontWeight: 600, }}>
                                    EyeballSales
                                </Typography>
                                <Typography variant='p' sx={{ fontSize: '16px', fontWeight: 400, color: 'gray', mt: 2 }}>
                                    Sales and Todo system
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    <Link href="https://www.example.com" color="inherit" underline="none" sx={{
                        display: 'block',
                        width: '35%',
                    }}>
                        <Box sx={{
                            display: 'block',
                            height: '200px',
                            borderRadius: '5px',
                            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;',
                            transition: 'transform 250ms',
                            '&:hover': {
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                cursor: 'pointer',
                                transform: 'translateY(-5px)'
                            },
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            p: '30px',
                            background: '#fff'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <img src={CmsLogo} class="cms-logo" alt="" />
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography variant='h3' sx={{ fontSize: '19px', fontWeight: 600, mt: 4 }}>
                                    Medishure CMS
                                </Typography>
                                <Typography variant='p' sx={{ fontSize: '16px', fontWeight: 400, color: 'gray', mt: 2 }}>
                                    Commission management system
                                </Typography>
                            </Box>

                        </Box>
                    </Link>
                    <Link href="https://www.example.com" color="inherit" underline="none" sx={{
                        display: 'block',
                        width: '35%',
                    }}>
                        <Box sx={{
                            display: 'block',
                            height: '200px',
                            borderRadius: '5px',
                            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;',
                            transition: 'transform 250ms',
                            '&:hover': {
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                cursor: 'pointer',
                                transform: 'translateY(-5px)'
                            },
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            p: '30px',
                            background: '#fff'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <img src={HrLogo} class="hr-logo" alt="" />
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography variant='h3' sx={{ fontSize: '19px', fontWeight: 600, mt: 3 }}>
                                    Medishure HR
                                </Typography>
                                <Typography variant='p' sx={{ fontSize: '16px', fontWeight: 400, color: 'gray', mt: 2 }}>
                                    HR management system
                                </Typography>
                            </Box>

                        </Box>
                    </Link>
                </Box>
            </Box>

            <Box sx={{ background: '#333', color: '#fff', py: 3 }}>
                <Container maxWidth="xl">
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                        &copy; {new Date().getFullYear()} Medishure. All rights reserved.
                    </Typography>
                </Container>
            </Box>

        </>

    );
}

export default Home;
