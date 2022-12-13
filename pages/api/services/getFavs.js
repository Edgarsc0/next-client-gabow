export default function(req,res){
    const {favs}=req.cookies;
    if(favs){
        return res.json({
            status:"ok",
            favs:JSON.parse(favs)
        })
    }else{
        return res.json({
            status:"no cookie favs"
        });
    }
}