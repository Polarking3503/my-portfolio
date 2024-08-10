import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Slider from 'react-slick';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skills = [
    { src: 'images/laravel-logo.png', alt: 'Laravel' },
    { src: 'images/react-logo.png', alt: 'React' },
    { src: 'images/js-logo.png', alt: 'JavaScript' },
    { src: 'images/php-logo.png', alt: 'PHP' },
    { src: 'images/mariadb-logo.png', alt: 'MariaDB' },
    { src: 'images/bootstrap-logo.png', alt: 'Bootstrap' },
    { src: 'images/tailwind-logo.png', alt: 'Tailwind CSS' },
    { src: 'images/mysql-logo.png', alt: 'MySQL' },
];

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

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <animated.div style={animationProps}>
            <Container sx={{ py: 8 }} id="about">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
                    <animated.div style={{ ...imageAnimationProps, flex: 1 }}>
                        <Avatar
                            alt="Jorge Reynaga"
                            src="images/me.png"
                            sx={{ width: 150, height: 150, mb: { xs: 2, md: 0 } }}
                        />
                    </animated.div>
                    <Box style={{ flex: 4 }}>
                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Sobre mí
                        </Typography>
                        <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
                            ¡Hola! Soy Luis Jorge Reynaga, un desarrollador backend con 2 años de experiencia.
                            Me especializo en el desarrollo de aplicaciones eficientes y escalables.
                            Manteniendo codígo de alta calidad y mejorando continuamente mis habilidades.
                        </Typography>
                        <Typography variant="body1" align="justify">
                            A lo largo de mi carrera, he trabajado en diversos proyectos que incluyen desarrollo web,
                            API REST, y aplicaciones de microservicios. Resolviendo problemas complejos y
                            trabajo en equipos multidisciplinarios.
                        </Typography>
                    </Box>
                </Stack>
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 4 }}>
                        Tecnologías y Frameworks
                    </Typography>
                    <Slider {...settings}>
                        {skills.map((skill, index) => (
                            <Box key={index} sx={{ p: 2, textAlign: 'center' }}>
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    style={{
                                        width: '100%',
                                        height: '60px',
                                        objectFit: 'contain',
                                        display: 'block',
                                        margin: '0 auto'
                                    }}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </animated.div>
    );
};

export default About;
