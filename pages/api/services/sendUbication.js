import nodemailer from "nodemailer";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
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
export default async function(req,res){
    const {params}=req.cookies;
    const {emails}=req.body;
    console.log(emails);
    //console.log(params);

    try{
        const decryptedToken=CryptoJS.AES.decrypt(params,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
        const {email,user}=jwt.verify(decryptedToken,process.env.SECURE_KEY);
        console.log(email,user);
        let correosEnviados=0;
        await emails.map(item=>{
            const  mailOptions = {
                from: `"Gabow " <${process.env.GMAIL_USER}>`, // dirección del remitente (quién envía)
                to: `${item}`, // lista de receptores (quién recibe)
                subject: 'Gabow: Ubicacion Compartida', // Línea de asunto
                html: `
                    Ubicacion Compartida
                    <hr>
                    ${user}: ${email} <strong>Quiere compartir su ubicacion contigo</strong>
                    <br>
                    Da click en el siguiente link para visualizarla
                    <br>
                    <a href="https://next-client-gabow.vercel.app/View">Ubicacion en tiempo real</a>                    
                `
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return res.json({
                        staus:"Bad Email sent",
                        error:error
                    });
                }else{
                    console.log('Message sent: ' + info.response);
                    correosEnviados+=1;
                    console.log(correosEnviados)
                    if(correosEnviados==emails.length){
                        console.log("return statement");
                        return res.json({
                            status:"emails sent"
                        });
                    }
                }
            });
        });
    }catch(error){
        return res.json({
            status:"Invalid Session"
        });
    }
}