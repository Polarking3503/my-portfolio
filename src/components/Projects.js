import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '12px',
   
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: `0px 10px 20px rgba(2, 136, 209, 0.5)`,
        },
}));

const ProjectImage = styled('img')({
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
});

const ProjectCard = ({ title, description, link, image, delay }) => {
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 },
        delay: delay,
    });

    return (
        <Grid item xs={12} sm={6} md={4}>
            <animated.div style={animationProps}>
                <StyledCard>
                    <ProjectImage src={image} alt={title} />
                    <CardContent>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={link} target="_blank">
                            Ver Proyecto
                        </Button>
                    </CardActions>
                </StyledCard>
            </animated.div>
        </Grid>
    );
};

const Projects = () => {
    const containerAnimationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 },
    });

    // Determine the number of columns to center the last project
    const numProjects = projects.length;
    const isCentered = numProjects % 3 === 1 && numProjects > 3;

    return (
        <animated.div style={containerAnimationProps}>
            <Container sx={{ py: 8 }} id="projects">
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    Proyectos
                </Typography>
                <Grid container spacing={4} justifyContent={isCentered ? 'center' : 'flex-start'}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            image={project.image}
                            delay={index * 200}
                        />
                    ))}
                </Grid>
            </Container>
        </animated.div>
    );
};

const projects = [
    {
        title: 'RMRY',
        description: 'Desarrollé la aplicación RMRY para especialistas de equinos en Jalisco usando PHP, JavaScript, Bootstrap, y CSS. La aplicación permite a los especialistas registrar y gestionar información de equinos, así como generar reportes, certificados agendar y te notifica sobre los eventos de tus equinos.',
        link: 'https://demo.registroequino.com/',
        image: 'images/RMRY.png',
    },
    {
        title: 'ExentoPlus',
        description: 'Sistema de Gestión de la Docencia ExentoPlus desarrollado utilizando principalmente Laravel 10, con pruebas automatizadas, JavaScript, y JQuery. El sistema permite evaluar a los alumnos, docentes de la Universidad de Guadalajara. Ademas tiene un sistema de reportes y estadísticas como alerta temprana',
        link: 'https://epra.exentoplus.com/',
        image: 'images/EXENTOPLUS.png',
    },
    {
        title: 'PROESDE',
        description: 'Desarrollé el sistema para el Programa de Estímulos al Desempeño Docente (PROESDE) usando Laravel 10, con pruebas automatizadas.  El sistema permite a los docentes de la Universidad de Guadalajara registrar y gestionar su información académica, así como solicitar y gestionar sus estímulos docentes.',
        link: 'http://148.202.213.168/',
        image: 'images/PROESDE.png',
    },
    {
        title: 'Apptlan.net',
        description: 'Página web oficial de Apptlan desarrollada con Bootstrap, CSS, y JavaScript para la promoción de servicios de desarrollo web y chatbots.',
        link: 'https://apptlan.net',
        image: 'images/APPTLAN.png',
    },
];

export default Projects;
