import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    console.log(req.body);
    const {cords}=req.body;
    console.log(cords);
    return res.json({
        status:"ok"
    });
}