export default function(req,res){
    console.log(req.body);
    return res.json({
        status:"ok"
    });
}