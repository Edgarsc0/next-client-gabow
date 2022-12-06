import con from "../db/config";
import myQuerys from "../db/querys";

export default function(req,res){
    con.query(myQuerys.selectPlaces,(error,result)=>{
        const data=[];
        const places=[];
        if(error){
            console.log(error);
            return res.json({
                status:"Something went wrong"
            });
        }else{
            result.map((item)=>{
                data.push({
                    id:item.id_espgeneral,
                    label:item.esg_nombre,
                    value:[item.esg_lon,item.esg_lat],
                    desc:item.esg_descripcion,
                    direccion:item.esg_direccion
                });
                places.push(item.esg_nombre);
            })

            console.log(data);
            //console.log(data);

            return res.json({
                info:data,
                places:places
            });
        }
    });
}