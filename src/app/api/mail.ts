import transporter from './nodemailer';

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendMail({ to, subject, text, html }: MailOptions): Promise<void> {
  const mailOptions = {
    from: '"Tu Nombre" <tu-email@example.com>', // Cambia esto por tu dirección de correo
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error enviando el correo:', error);
  }
}
