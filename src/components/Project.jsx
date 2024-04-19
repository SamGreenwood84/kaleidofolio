import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Project(project) {
    {/** Project Card Layout import */}
    return (
        <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card className='card' variant='outlined' sx={{ maxWidth: 300 }}>
                <CardMedia
                    className='cardMedia'
                    sx={{ height: 100 }}
                    image={project.img}
                    title={project.title}
                />
                <CardContent className='cardContent'>
                    <Typography sx={{ color: '#00ff00' }} gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" align='justify' color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Link to={project.github}><Button size="small">Github Repo</Button></Link>
                    <Link to={project.url}><Button size="small">URL / Demo</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Project;