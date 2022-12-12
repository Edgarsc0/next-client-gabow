import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {user}=req.body;
    con.query(myQuerys.selectRoutes,[user],(err,result)=>{
        if(err){
            return res.json({
                status: "something went wrong",
                error:err
            });
        }else{
            return res.json({
                status:"ok",
                info:result
            });
        }
    });
}