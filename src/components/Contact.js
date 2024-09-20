import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const primaryButtonColor = '#0d47a1';  // New primary button color
const secondaryButtonColor = '#00796b';  // New secondary button color

const StyledDiv = styled('div')(({ theme }) => ({
    boxShadow: `0px 4px 10px ${theme.palette.grey[500]}`,
    padding: theme.spacing(4),
    textAlign: 'center',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
}));

const StyledButton = styled(Button)(({ theme, colorType }) => ({
    marginTop: theme.spacing(2),
    margin: theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    borderRadius: '12px',
    fontWeight: 'bold',
    textTransform: 'none',
    transition: 'background-color 0.3s ease',
    backgroundColor: colorType === 'secondary' ? secondaryButtonColor : primaryButtonColor,
    color: '#fff',
}));

const Contact = () => {
    const containerAnimationProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={containerAnimationProps}>
            <StyledDiv id="contact">
                <Typography variant="h4" component="h1" color="primary">
                    ¡Pongámonos en Contacto!
                </Typography>
                <StyledTypography variant="h6">
                    Estoy disponible para nuevas oportunidades y colaboraciones. Si deseas conocer más sobre mi trabajo o discutir un proyecto, no dudes en contactarme.
                </StyledTypography>
                
                <StyledButton
                    variant="contained"
                    colorType="secondary"
                    href="mailto:reynaga_45@icloud.com"
                >
                    Enviar Correo
                </StyledButton>
            </StyledDiv>
        </animated.div>
    );
};

export default Contact;
