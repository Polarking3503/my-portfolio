import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const experiences = [
    {
        date: 'Enero 2024 - Actualidad',
        title: 'Desarrollador',
        details: [
            'Desarrollé la página web oficial de Apptlan para la promoción de servicios de desarrollo web y chatbots.',
            'Desarrollé la aplicación RMRY para especialistas de equinos en Jalisco.',
            'Colaboré en la implementación de nuevas funciones y supervisión de la aplicación web Raite.',
        ],
    },
    {
        date: 'Agosto 2022 - Diciembre 2023',
        title: 'Colaborador',
        details: [
            'Colaboré en la implementación de nuevas funciones del Sistema de Horas Prácticas para el Laboratorio de Aprendizaje Global en el Centro Universitario de la Costa Sur - Universidad de Guadalajara.',
            'Colaboré en la implementación de nuevas funciones del Sistema de Gestión de la Docencia ExentoPlus.',
            'Desarrollé el sistema para el Programa de Estímulos al Desempeño Docente (PROESDE) para el Centro Universitario de la Costa Sur - Universidad de Guadalajara.',
        ],
    },
];

const TimelineExperienceItem = ({ date, title, details, delay, isLatest }) => {
    const [expanded, setExpanded] = useState(false);
    const animationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 },
        delay: delay,
    });

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color={isLatest ? 'primary' : 'grey'}>
                    {isLatest && <StarIcon />}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
                <animated.div style={animationProps}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            {date}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold', mt: 1 }}>
                            {title}
                        </Typography>
                        {!expanded && (
                            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                                Haz clic para ver más detalles
                            </Typography>
                        )}
                        {expanded && (
                            <Box sx={{ mt: 1 }}>
                                {details && details.map((detail, index) => (
                                    <Typography key={index} variant="body1" sx={{ mt: 1 }}>
                                        {detail}
                                    </Typography>
                                ))}
                            </Box>
                        )}
                    </Box>
                </animated.div>
            </TimelineContent>
        </TimelineItem>
    );
};

const Experience = () => {
    const containerAnimationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={containerAnimationProps}>
            <Container sx={{ py: 8 }} id="experience">
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    Experiencia
                </Typography>
                <Timeline position="alternate">
                    {experiences.map((experience, index) => (
                        <TimelineExperienceItem
                            key={index}
                            date={experience.date}
                            title={experience.title}
                            details={experience.details}
                            delay={index * 200}
                            isLatest={index === 0}
                        />
                    ))}
                </Timeline>
            </Container>
        </animated.div>
    );
};

export default Experience;
