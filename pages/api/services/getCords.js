import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {id}=req.body;
    con.query(myQuerys.selectCords,[id],(err,result)=>{
        if(err){
            return res.json({
                status:"something went wrong"
            });
        }else{
            return res.json({
                status:"ok",
                response:result
            })
        }
    });
}