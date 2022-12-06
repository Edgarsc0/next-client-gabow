import { useRouter } from 'next/router'
import { useState } from 'react';
import places from "../../public/cecyt9.json";
const Edificio=()=>{
    const router=useRouter();
    const {place}=router.query;
    const [piso,setPiso]=useState("PB");
    return(
        <>
            {place}
            <SVG place={place} piso={piso}/>
        </>
    )
}
function SVG({place,piso}){
    if(place=="CECyT9"){
        switch(piso){
            case "PB":
                return places.edifAulas.plantaBaja;
        }
    }
}
export default Edificio;