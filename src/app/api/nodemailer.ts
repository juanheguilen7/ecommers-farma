import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  host: 'https://outlook.live.com', // Cambia esto por el host de tu servicio de correo
  port: 587, // Cambia esto si tu servicio de correo usa un puerto diferente
  secure: false, // true para port 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER, // Tu usuario de correo
    pass: process.env.EMAIL_PASS, // Tu contraseña de correo
  },
});

export default transporter;
