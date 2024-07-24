import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const About = () => {
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 },
    });

    const imageAnimationProps = useSpring({
        opacity: 1,
        transform: 'scale(1)',
        from: { opacity: 0, transform: 'scale(0.8)' },
        config: { duration: 1000 },
        delay: 500,
    });

    return (
        <animated.div style={animationProps}>
            <Container sx={{ py: 8 }}>
                <Stack spacing={4} alignItems="center">
                    <animated.div style={imageAnimationProps}>
                        <Avatar
                            alt="Jorge Reynaga"
                            src="images/memoji.png"
                            sx={{ width: 150, height: 150, mb: 2 }}
                        />
                    </animated.div>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                        Sobre mí
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ maxWidth: 600 }}>
                        ¡Hola! Soy Jorge Reynaga, un desarrollador backend con 2 años de experiencia.
                        Me especializo en el desarrollo de aplicaciones eficientes y escalables.
                        Me apasiona aprender nuevas tecnologías y mejorar continuamente mis habilidades.
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ maxWidth: 600 }}>
                        A lo largo de mi carrera, he trabajado en diversos proyectos que incluyen desarrollo web, 
                        API RESTful, y aplicaciones de microservicios. Me encanta resolver problemas complejos y 
                        trabajar en equipos multidisciplinarios.
                    </Typography>
                </Stack>
            </Container>
        </animated.div>
    );
};

export default About;
