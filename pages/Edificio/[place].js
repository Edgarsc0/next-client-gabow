import { useRouter } from 'next/router'
const Edificio=()=>{
    const router=useRouter();
    const {place}=router.query;
    return(
        <h1>Hola {place}</h1>
    )
}