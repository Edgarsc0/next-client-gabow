import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

export default function (req,res){
    if(req.method=="POST"){
        const {name,email,affair,message}=req.body;
        const  mailOptions = {
            from: `"Gabow " <${process.env.GMAIL_USER}>`, // dirección del remitente (quién envía)
            to: `${process.env.GMAIL_USER}`, // lista de receptores (quién recibe)
            subject: 'Gabow : Contacto', // Línea de asunto
            html: `
                <h1>${affair} de ${email}</h1>
                <h2>${name} tiene un mensaje para la empresa</h1>
                <p>${message}.</p>
                <p><strong>Gabow: Developed by Qu Ex<strong></p>
            `
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.json({
                    staus:"Bad Email sent",
                    error:error
                });
            }
            console.log('Message sent: ' + info.response);
            return res.json({
                status:"Message sent",
                data:info.response
            });
        });
    }else{
        return res.json({
            status:`Bad request ${req.method}`
        });
    }
}