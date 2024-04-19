import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import StyleIcon from '@mui/icons-material/Style';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

{/** list of technical profeciencies with fully functional resume download button */}
function Resume() {
    return (
        <div className='resumeBox appJsx'>
            <Box sx={{ width: '100%', maxWidth: 500 }} className='marginTop resumeBox'>
                <Typography variant="h5" color='textSecondary' gutterBottom>
                    Technical Skills
                </Typography>
                <Box sx={{ flexGrow: 1, maxWidth: 752}}>
                    <Grid container spacing={4} sx={{ justifyContent: 'center'}}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Demo>
                                <List dense={true} sx={{textAlign: 'center'}}>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <HtmlIcon sx={{ color: '' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='HTML'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CssIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='CSS'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <JavascriptIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='JavaScript'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='Jquery'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='React'
                                            />
                                        </ListItem>
                                </List>
                            </Demo>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Demo>
                                <List dense={true}>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <DataObjectIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='OOP'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <DataObjectIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='ORM'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeOffIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='MVC'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeOffIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='PWA'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeOffIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='APIs'
                                            />
                                        </ListItem>
                                </List>
                            </Demo>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <Demo>
                                <List dense={true}>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeIcon sx={{ color: '#00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='Node.js'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeIcon sx={{ color: '#00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='Express.js'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='MERN'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <CodeIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='State'
                                            />
                                        </ListItem>
                                </List>
                            </Demo>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Demo>
                                <List dense={true}>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <StyleIcon sx={{ color: '#00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='Bootstrap'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <StyleIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='Material UI'
                                            />
                                        </ListItem>
                                </List>
                            </Demo>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Demo>
                                <List dense={true}>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <StorageIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='mySQL'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <StorageIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='NoSQL'
                                            />
                                        </ListItem>
                                        <ListItem color='textSecondary'>
                                            <ListItemIcon sx={{ marginRight: '5px'}}>
                                                <StorageIcon sx={{ color: '00ff00' }}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary='GraphQL'
                                            />
                                        </ListItem>
                                </List>
                            </Demo>
                        </Grid>
                    </Grid>
                </Box>
                <Button
                    variant="outlined"
                    startIcon={<FileDownloadIcon />}
                    href="../resume/SamGreenwood2024.docx"
                    download="SamGreenwood2024.docx"
                    sx={{ mt: 2, mb: 4 }}
                >
                    Download Resume
                </Button>
            </Box>
        </div>
    );
}


export default Resume;