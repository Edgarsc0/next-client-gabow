import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {id}=req.body;
    con.query(myQuerys.selectPlaceById,[`%${id}%`],(err,result)=>{
        if(err){
            return res.json({
                status:"Something went wrong"
            });
        }else{
            if(result.length==0){
                return res.json({
                    status:"Place not found"
                });
            }else{
                return res.json({
                    status:"ok",
                    place:result[0].esg_nombre
                });
            }
        }
    });
}