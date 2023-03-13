import con from "../db/config";
import myQuerys from "../db/querys";

export default function (req, res) {
    //console.log("hola desde getPlaces");
    if (req.method == "GET") {
        return res.json({
            status: "recibido"
        });
    } else {
        con.query(myQuerys.selectPlaces, (error, result) => {
            const data = [];
            const places = [];
            if (error) {
                console.log(error);
                return res.json({
                    status: "Something went wrong"
                });
            } else {
                result.map((item) => {
                    data.push({
                        id: item.id_espgeneral,
                        label: item.esg_nombre,
                        value: [item.esg_lon, item.esg_lat],
                        desc: item.esg_descripcion,
                        direccion: item.esg_direccion
                    });
                    places.push(item.esg_nombre);
                })

                console.log(data);

                return res.json({
                    info: data,
                    places: places
                });
            }
        });
    }

}