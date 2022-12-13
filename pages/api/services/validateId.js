import con from "../db/config";
import myQuerys from "../db/querys";
export default function(req,res){
    const {id,email}=req.body;
    console.log(id,email);
    return res.json({
        status:"ok",
        data:{
            id:id,
            email:email
        }
    })
}