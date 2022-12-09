import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {cords,id_ruta}=req.body;
    console.log(cords);
    cords.forEach(item=>{
        console.log(item);
    });
    return res.json({
        staus:"ok"
    });
}