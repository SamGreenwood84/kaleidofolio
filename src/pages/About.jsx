{/* Importing material UI */}
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import about1 from '/img/about1.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <div className='aboutJsx'>
            <CssBaseline />
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginTop: '100px'
                }}
            >
                {/* portfolio pic */}
                <Avatar
                    alt="Sam Greenwood"
                    src={about1}
                    sx={{ width: 250, height: 250 }}
                />

                {/* About me */}
                <Box sx={{ width: '100%', maxWidth: 500, marginLeft: '35px', marginTop: '25px', color: 'text.secondary' }}>
                    <Typography variant="h5" gutterBottom>
                      Full-Stack Developer
                    </Typography>
                    <Typography variant="body1" align='justify' gutterBottom>
                    Inspired by the endless possibilities of design and development, I'm fueled by
                        a passion for creative expression through innovation. Whether it's design, marketing, or
                        development, I'm always eager to connect, collaborate and put your ideas into the world!🌐💻
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default About;