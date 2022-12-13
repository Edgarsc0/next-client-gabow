import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Select from 'react-select'
import axios from "axios";
import styles from '../../styles/Mapas.module.scss';
const Edificio=()=>{
    const router=useRouter();
    const {place}=router.query;
    const [places,setPlaces]=useState([]);
    const [piso,setPiso]=useState([]);
    const [selectedPiso,setSelectedPiso]=useState();
    const [selectedLugar,setSelectedLugar]=useState();
    const [svg,setSVG]=useState();
    const [lugares,setLugares]=useState([]);
    const [rectSelected,setRectSelected]=useState();
    const [current,setCurrent]=useState([]);
    const getData=async()=>{
        const {data}=await axios.post("/api/services/getPlaces");
        console.log(data);
        setPlaces(data.places);
    }
    const getLugares=async()=>{
        const {data}=await axios.post("/api/services/getLugares",{place:place});
        console.log(data.lugares);
        setLugares(data.lugares);
    }
    const getSVG=async()=>{
        document.getElementById("svg").innerHTML="CARGANDO..."
        const {data}=await axios.post("/api/services/getSVG",{
            piso:selectedPiso,
            place:place,
            lugar:selectedLugar
        });
        setSVG(data.svg);
    }
    const handleChangeLugar=async(optionSelected)=>{
        const {data}=await axios.post("/api/services/getPisos",{lugar:optionSelected.value,place:place});
        setPiso(data.pisos);
        setSelectedPiso(undefined);
        setSelectedLugar(optionSelected.value);
    }
    const handleChangePiso=(optionSelected)=>{
        setSelectedPiso(optionSelected.value);
    }
    useEffect(()=>{
        if(places.length==0){
            getData();
        }
        if(lugares.length==0){
            getLugares();
        }
        
        if(selectedLugar && selectedPiso){
            getSVG();
            document.getElementById("svg").innerHTML=svg;
            if(svg){
                var svgCanvas = document.getElementById("eqXo87N13f91");
                var viewPort = document.getElementById("viewport");
                console.log(svgCanvas)
                console.log(viewPort)
                var drag = false;
                var offset = { x: 0, y: 0 };
                var factor = .1;
                var matrix = new DOMMatrix();
                // MIENTRASS ESTE EL MOUSE CLICKEANDO
                svgCanvas.addEventListener('pointerdown', function (event) {
                    drag = true;
                    offset = { x: event.offsetX, y: event.offsetY };
                });
                // MIENTRAS SE MUEVA EL MOUSE
                svgCanvas.addEventListener('pointermove', function (event) {
                    if (drag) {
                        var tx = event.offsetX - offset.x;
                        var ty = event.offsetY - offset.y;
                            offset = {
                                x: event.offsetX,
                                y: event.offsetY
                            };                
                            matrix.preMultiplySelf(new DOMMatrix()
                            .translateSelf(tx, ty));
                            // SOLO SI ESTA DENTRO DE LOS LIMITES
                            if((matrix.e > -1100 && matrix.e < 1100) && (matrix.f > -700 && matrix.f < 700)){
                                viewPort.style.transform = matrix.toString();
                            }
                            else{
                                if(matrix.e < 0){
                                    matrix.e += 1;
                                }
                                else if(matrix.e > 0){
                                    matrix.e -= 1;
                                }
                                else if(matrix.f < 0){
                                    matrix.f += 1;
                                }
                                else if(matrix.f > 0){
                                    matrix.f -= 1;
                                }
                            }
                    }
                });
                // CUANDO EL MOUSE ABANDONE EL SVG
                svgCanvas.addEventListener('pointerup', function (event) {
                    drag = false;
                });
            }
            if(place=="CECyT 9"){
                current.length=0;
                document.getElementsByName("aula").forEach(item=>{
                    current.push({
                        label:item.id,
                        value:item.id
                    });
                    item.onclick=()=>{
                        try{
                            if(document.getElementsByClassName("resaltado")[0].id!=item.id){
                                document.getElementsByClassName("resaltado")[0].removeAttribute("class");
                            }
                        }catch(error){}
                        //window.location.href='/Ruta/${item.id}'
                        document.getElementById("button").innerHTML=`
                            <button class="button" onclick="">Iniciar Ruta a ${item.id}</button>
                            <button class="button" onclick="function(){
                                console.log("hola");
                            }">Añadir a Favoritos</button>
                        `
                    }                    
                    item.onmouseover=()=>{
                        item.style.fill="aqua";
                    }
                    item.onmouseleave=()=>{
                        item.style.fill="";
                    }
                });
            }if(place=="Town Center"){
                current.length=0;
                document.getElementsByName("town").forEach(item=>{
                    current.push({
                        label:item.id,
                        value:item.id
                    });
                    item.onclick=()=>{
                        try{
                            if(document.getElementsByClassName("resaltado")[0].id!=item.id){
                                document.getElementsByClassName("resaltado")[0].removeAttribute("class");
                            }
                        }catch(error){}
                        document.getElementById("button").innerHTML=`<button class="button" onclick="window.location.href='/Ruta/${item.id}'">Iniciar Ruta a ${item.id}</button>`;
                    }
                    item.onmouseover=()=>{
                        item.style.fill="aqua";
                    }
                    item.onmouseleave=()=>{
                        item.style.fill="";
                    }
                });
            }
        }
    })
    const handleSearch=(option)=>{
        try{
            document.getElementsByClassName("resaltado")[0].removeAttribute("class");
        }catch(error){}
        document.getElementById(option.value).setAttribute("class","resaltado");
        document.getElementById(option.value).onclick();
        window.location.href=`#${option.value}`;
    }

    if(places.includes(place)){
        return(
            <>
                <div className={styles.container3}>
                    <h1>{place}</h1>
                </div>
                <div className={styles.container3} id="button"></div>
                <hr></hr>
                <div className={styles.header}>
                    <Select className={styles.buscador} onChange={handleChangeLugar} options={lugares} placeholder='Selecciona un lugar...'></Select>
                    <Select className={styles.buscador} onChange={handleChangePiso} options={piso} placeholder='Selecciona un piso...'></Select>
                    <Select className={styles.buscador} options={current} onChange={handleSearch} placeholder="En este piso..."></Select>
                </div>
                <div id="svg"></div>
            </>
        )
    }else{
        return(<h1>La busqueda no produjo resultados</h1>)
    }
}

export default Edificio;