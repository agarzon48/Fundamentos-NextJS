import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_SMTP_PORT,
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendMail = async ({
  from,
  text,
}: {
  from: string;
  text: string;
}) => {
  const info = await transporter.sendMail({
    from,
    to: process.env.EMAIL_USER,
    subject: "Contacto desde ",
    text,
  });
  console.log("Message sent: %s", info.messageId);
};
