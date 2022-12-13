const myQuerys={
    selectPlaces:"select * from Espacio_general",
    selectLugares:"select distinct cod_lugar from codigo_espgeneral where esg_nombre=?",
    selectInnerJoinTable:"select * from codigo_espgeneral",
    selectPisos:"select cod_piso from codigo_espgeneral where esg_nombre=? and cod_lugar=?",
    selectSVG:"select convert(cod_codigo using utf8) as svg from codigo_espgeneral where esg_nombre=? and cod_piso=? and cod_lugar=?",
    selectPlaceById:"select esg_nombre from codigo_espgeneral where convert(cod_codigo using utf8) like ?",
    insertDate:"insert into Ruta_fecha(rfc_dia,rfc_mes,rfc_anno) values(?,?,?)",
    insertRoute:"insert into Ruta(rut_origen,rut_destino,usu_correo,id_fecha,id_espg) values(?,?,?,?,?)",
    insertCords:"insert into Coordenadas(cor_latitud,cor_longitud,id_ruta) values(?,?,?)",
    selectRoutes:"select * from ruta_fecha_espg where usu_correo=?",
    selectCords:"select * from Coordenadas where id_ruta=?",
    deleteFromCords:"delete from Coordenadas where id_ruta=?",
    deleteFromRoute:"delete from Ruta where id_ruta=?"
}

export default myQuerys;