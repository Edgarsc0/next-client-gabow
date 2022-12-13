import con from "../db/config";
import myQuerys from "../db/querys";
export default function (req,res){
    const {id}=req.body;
    con.query(myQuerys.deleteFromCords,[id],(err,result)=>{
        if(err){
            return res.json({
                status:"something went wrong",
                error:err
            });
        }else{
            con.query(myQuerys.deleteFromRoute,[id],(err,result)=>{
                if(err){
                    return res.json({
                        status:"something went wrong",
                        error:err
                    });
                }else{
                    return res.json({
                        status:"ok"
                    });
                }
            });
        }
    }); 
}