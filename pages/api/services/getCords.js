import con from "../db/config";
import myQuerys from "../db/querys";
const arrayPosition=[];
export default function(req,res){
    const {id}=req.body;
    con.query(myQuerys.selectCords,[id],(err,result)=>{
        if(err){
            return res.json({
                status:"something went wrong"
            });
        }else{
            result.map(item=>{
                arrayPosition.push([item.cor_latitud,item.cor_longitud])
            });
            return res.json({
                status:"ok",
                cords:arrayPosition
            })
        }
    });
}