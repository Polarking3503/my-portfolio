// api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, email, descripcion } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'mail.apptlan.net',
            port: 587,
            secure: false,
            auth: {
                user: 'jorge@apptlan.net',
                pass: 'LEVIgn,{,69',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: 'jorge@apptlan.net',
            to: 'jorge@apptlan.net',
            subject: 'Nuevo mensaje de contacto',
            text: `Nombre: ${nombre}\nEmail: ${email}\nDescripción: ${descripcion}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Correo enviado con éxito' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ message: 'Error al enviar el correo' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
