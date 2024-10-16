const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    host: 'mail.apptlan.net',
    port: 587,
    secure: false,
    auth: {
        user: 'jorge@apptlan.net',
        pass: 'LEVIgn,{,69',
    },
    tls: {
        rejectUnauthorized: false, // Permite certificados autofirmados
    },
});

app.post('/send-email', (req, res) => {
    const { nombre, email, descripcion } = req.body;

    const mailOptions = {
        from: 'jorge@apptlan.net',
        to: 'jorge@apptlan.net',
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nDescripción: ${descripcion}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el correo: ' + error.toString());
        }
        res.status(200).send('Correo enviado: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
