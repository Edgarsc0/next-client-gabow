import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {cords,id_ruta}=req.body;
    console.log(cords);
    cords.forEach(item=>{
        console.log(item);
        con.query(myQuerys.insertCords,[item[0],item[1],id_ruta],(err,result)=>{
            if(err){
                console.log(err);
                return res.json({
                    status: "something went wrong"
                });
            }
        });
    });
}