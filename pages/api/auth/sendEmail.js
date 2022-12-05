import nodemailer from "nodemailer";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

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
        const {email,user,pswd}=req.body;
        const token=jwt.sign({
            //expirar el token en 6 minutos
            exp:Math.floor(Date.now()/1000)+60*6,
            user:user,
            email:email,
            password:pswd,
        },process.env.SECURE_KEY);
        const  mailOptions = {
            from: `"Gabow " <${process.env.GMAIL_USER}>`, // dirección del remitente (quién envía)
            to: `${email}`, // lista de receptores (quién recibe)
            subject: 'Gabow: Comprueba tu Correo', // Línea de asunto
            html: `
                <h1>Verificacion en dos pasos. </h1>
                <p>Tu correo es: ${email}.</p>
                <p>Seras registrado con el usuario ${user}.</p>
                <br>
                <p>Da click en el siguiente enlace para finalizar tu registro:</p>
                <a href = "http://localhost:3000/Verify/${token}" >
                    VERIFICAR CORREO
                </a>

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