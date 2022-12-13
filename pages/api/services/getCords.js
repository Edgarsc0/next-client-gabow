import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {id}=req.body;
    return res.json({
        status:"ok"
    })
}