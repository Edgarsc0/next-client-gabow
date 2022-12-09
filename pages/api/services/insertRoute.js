import con from "../db/config"
import myQuerys from "../db/querys"
export default function(req,res){
    const {rut_origen,rut_destino,usu_correo,id_fecha,id_espg}=req.body;
    con.query(myQuerys.insertRoute,[rut_origen,rut_destino,usu_correo,id_fecha,id_espg],(err,result)=>{
        if(err){
            console.log(err);
            return res.json({
                status:"Something went wrong"
            });
        }else{
            return res.json({
                status:"ok",
                results:result
            })
        }
    })
}