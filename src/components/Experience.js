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
            `Diseñé y desarrollé la página web oficial de Apptlan, enfocada en la promoción de nuestros servicios de desarrollo web y chatbots. 
            La página web fue optimizada para SEO, lo que incrementó la visibilidad en motores de búsqueda y atrajo un 20% más de tráfico orgánico en 
            los primeros tres meses.`,

            `Transformé la gestión de equinos para especialistas en Jalisco con la aplicación RMRY, que digitalizó los procesos previamente realizados en papel. 
            La aplicación permite recibir notificaciones sobre eventos importantes en el ciclo de vida de las yeguas y genera reportes detallados, mejorando 
            significativamente la eficiencia y precisión en la administración equina. Actualmente tiene 100 usuarios usándolo.`,

            `Contribuí a la implementación de nuevas funcionalidades en la aplicación web Raite, incluyendo la integración de un sistema de notificaciones en tiempo real 
            y la optimización del rendimiento del frontend. Además, supervisé el proceso de desarrollo para asegurar la calidad del código y la adherencia a las mejores 
            prácticas, lo que resultó en una experiencia de usuario más fluida y una reducción en los tiempos de carga de la aplicación.`,
        ],
    },
    {
        date: 'Agosto 2022 - Diciembre 2023',
        title: 'Colaborador',
        details: [
            `Optimicé mejoras en el Sistema de Horas Prácticas, optimizando el registro de entrada y salida de los alumnos para evitar fraudes en la contabilización de horas.
            Este sistema ahora es utilizado por más de 400 usuarios, asegurando un control más riguroso y transparente. Se usa en el Centro Universitario de la Costa Sur - 
            Universidad de Guadalajara.`,

            `Mejoré el sistema ExentoPlus al implementar alertas tempranas para reducir la tasa de reprobación entre los estudiantes. Además, desarrollé nuevos roles de 
            usuario, filtros avanzados para la vista del administrador, y optimicé el sistema de evaluaciones para tutores, así como la sincronización de estudiantes con 
            sus clases y horarios. Este sistema es utilizado por más de 1,000 usuarios, facilitando una gestión educativa más eficiente y personalizada. ExentoPlus.`,

            `Desarrollé el sistema PROESDE, ayudando a la universidad a garantizar que los profesores reciban los estímulos correspondientes al subir evidencias e 
            información relevante. Este sistema cuenta con más de 200 usuarios, proporcionando una plataforma confiable para la evaluación del desempeño docente.`,
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
