import mysql from "mysql2";
import dotenv from "dotenv";
import CryptoJS from "crypto-js";

dotenv.config();

const con=mysql.createPool({
    host: CryptoJS.AES.decrypt(process.env.BD_HOST,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8),
    port: CryptoJS.AES.decrypt(process.env.BD_PORT,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8),
    password: CryptoJS.AES.decrypt(process.env.BD_PASSWORD,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8),
    user: CryptoJS.AES.decrypt(process.env.BD_USER,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8),
    database: CryptoJS.AES.decrypt(process.env.BD_DATABASE,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)
    /*host:"localhost",
    port:3306,
    password:"Hal02012()",
    user:"root",
    database:"simapDB"*/
});

export default con;
