import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {place}=req.body;
    con.query(myQuerys.selectLugares,[place],(err,result)=>{
        if(err){
            return res.json({
                status:"Something went wrong",
                error:err
            });
        }else{
            //console.log(result);
            const lugares=[];
            result.map(item=>{
                lugares.push({
                    label:item.cod_lugar,
                    value:item.cod_lugar
                });
            });
            return res.json({
                lugares:lugares
            });
        }
    });
}