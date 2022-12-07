import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {lugar,place}=req.body;
    con.query(myQuerys.selectPisos,[place,lugar],(err,result)=>{
        if(err){
            return res.json({
                status:"Something went wrong",
                error:err
            });
        }else{
            const pisos=[];
            result.map(item=>{
                pisos.push({
                    label:item.cod_piso,
                    value:item.cod_piso
                })
            });
            return res.json({
                pisos:pisos
            });
        }
    })
}