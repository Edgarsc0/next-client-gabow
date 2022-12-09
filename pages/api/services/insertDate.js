import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {year,day,month}=req.body;
    con.query(myQuerys.insertDate,[day,month,year],(err,result)=>{
        if(err){
            return res.json({
                status:"Something went wrong"
            });
        }else{
            return res.json({
                status: "ok",
                result:result
            });
        }
    })
}