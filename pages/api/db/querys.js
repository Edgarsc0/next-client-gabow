const myQuerys={
    selectPlaces:"select * from Espacio_general",
    selectLugares:"select distinct cod_lugar from codigo_espgeneral where esg_nombre=?",
    selectInnerJoinTable:"select * from codigo_espgeneral",
    selectPisos:"select cod_piso from codigo_espgeneral where esg_nombre=? and cod_lugar=?",
    selectSVG:"select convert(cod_codigo using utf8) as svg from codigo_espgeneral where esg_nombre=? and cod_piso=? and cod_lugar=?",
    selectPlaceById:"select esg_nombre from codigo_espgeneral where convert(cod_codigo using utf8) like ?",
    insertDate:"insert into Ruta_fecha(rfc_dia,rfc_mes,rfc_anno) values(?,?,?)",
    insertRoute:"insert into Ruta(rut_origen,rut_destino,usu_correo,id_fecha,id_espg) values(?,?,?,?,?)"
}

export default myQuerys;