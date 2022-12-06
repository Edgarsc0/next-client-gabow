const myQuerys={
    selectPlaces:"select * from Espacio_general",
    selectLugares:"select distinct cod_lugar from codigo_espgeneral where esg_nombre=?",
    selectInnerJoinTable:"select * from codigo_espgeneral",
}

export default myQuerys;