const myQuerys={
    selectPlaces:"select * from Espacio_general",
    selectLugares:"select distinct cod_lugar from codigo_espgeneral where esg_nombre=?",
    selectInnerJoinTable:"select * from codigo_espgeneral",
    selectPisos:"select cod_piso from codigo_espgeneral where esg_nombre=? and cod_lugar=?"
}

export default myQuerys;