import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import projects from '../utils/projects.json'
import { Link } from 'react-router-dom';
import Project from '../components/Project'

{/** portfolio page, imports in project component, maps through json file of projects */}
function Portfolio() {
    return (
        <div className="appJsx marginTop" >
            <Grid container justifyContent='center'>
                <Link to='https://github.com/SamGreenwood84/kaleidofolio-v3.git'><Button variant='outlined'>View in GitHub</Button></Link>
            </Grid>
            <div>
                <Container maxWidth='md' sx={{ padding: '20' }}>
                    <Grid container spacing={4}>
                        {projects.map((project) => (
                            <Project key={project.id} {...project}/>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Portfolio;