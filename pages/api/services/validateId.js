import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {id,email}=req.body;
    con.query(myQuerys.selectRoutes,[email],(err,result)=>{
        if(err){
            return res.json({
                status:"something went wrong",
                error:err
            });
        }else{
            return res.json({
                status:"ok",
                info:result.find(item=>item.id_ruta=id),
            });
        }
    });
}