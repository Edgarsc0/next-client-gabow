import con from "../db/config";
import myQuerys from "../db/querys";

export default function(req,res){
    const {piso,place,lugar}=req.body;
    con.query(myQuerys.selectSVG,[place,piso,lugar],(err,result)=>{
        if(err){
            return res.json({
                status:"Something went wrong",
                error:err
            });
        }else{
            return res.json({
                svg:result[0].svg
            });
        }
    })
}