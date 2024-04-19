{/* Imported dependancies from material UI and react router dom */}
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

{/* This footer will display on every page on the app*/}
function Footer() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <footer className='marginTopFooter'>
            <Box ref={ref}>
                <CssBaseline />
                <Paper>
                    <BottomNavigation
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.0)',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {/* Links for LinkedIn and github */}
                        <Link to='https://www.linkedin.com/in/samantha-greenwood-b7565839/'><BottomNavigationAction icon={<LinkedInIcon sx={{ color: '#00ff00' }} />} /></Link>
                        <Link to='https://github.com/SamGreenwood84'><BottomNavigationAction icon={<GitHubIcon sx={{ color: '#00ff00' }} />} /></Link>
                    </BottomNavigation>
                </Paper>
            </Box>
        </footer>
    );
}

export default Footer;