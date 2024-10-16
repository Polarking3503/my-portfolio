import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import NearMeIcon from '@mui/icons-material/NearMe';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress'; // Importa el loader

const StyledDiv = styled('div')(({ theme }) => ({
    boxShadow: `0px 4px 10px ${theme.palette.grey[500]}`,
    padding: theme.spacing(4),
    textAlign: 'center',
    maxWidth: '100%', 
    margin: '0 auto',
    borderRadius: '8px',
}));

const StyledButton = styled(({ colorType, ...otherProps }) => (
    <Button {...otherProps} />
))({
    marginTop: '16px',
    borderRadius: '8px',
    width: '100%',
    backgroundColor: '#0078c7',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#00aafe',
    },
});

const Contact = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', descripcion: '' });
    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus('Enviando...');

        try {
            await axios.post('/api/send-email', formData);
            setStatus('Mensaje enviado con éxito.');
            setFormData({ nombre: '', email: '', descripcion: '' });
        } catch (error) {
            setStatus('Hubo un error al enviar el mensaje.');
            console.error(error);
        } finally {
            setIsSending(false);
        }
    };

    const isFormValid = formData.nombre && formData.email && formData.descripcion;

    return (
        <StyledDiv id="contact">
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6} md={6} align="center">
                    <img src="images/Mail.png" alt="Mail Icon" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h4" component="h1" color="primary" align="center">
                        Contáctame
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <EmailIcon style={{ marginRight: '0.5rem' }} fontSize="small" />
                        <a href="mailto:reynaga_45@icloud.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            reynaga_45@icloud.com
                        </a>
                    </Typography>

                    <Typography variant="h6" color="textPrimary" align="center" sx={{ mt: 3 }}>
                        Estoy interesado...
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField 
                            fullWidth 
                            margin="normal" 
                            label="Nombre" 
                            variant="outlined" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange}
                        />
                        <TextField 
                            fullWidth 
                            margin="normal" 
                            label="Email" 
                            variant="outlined" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Descripción"
                            variant="outlined"
                            name="descripcion"
                            multiline
                            rows={4}
                            value={formData.descripcion}
                            onChange={handleChange}
                        />
                        <StyledButton
                            type="submit"
                            startIcon={!isSending && <NearMeIcon />}
                            disabled={!isFormValid || isSending}
                        >
                            {isSending ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
                        </StyledButton>
                        {status && <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>{status}</Typography>}
                    </Box>
                </Grid>
            </Grid>
        </StyledDiv>
    );
};

export default Contact;
