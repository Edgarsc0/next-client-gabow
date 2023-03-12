import React from "react";
import { useSession,signIn,signOut } from "next-auth/react";
const AuthGoogleButton=()=>{
    const {data:session}=useSession();

    if(session){
        console.log(session);
        return (
            <div>
                <p>Welcome, email: {session.user.email}</p>
                <p>Username: {session.user.name}</p>
                <p>Profile Image: </p><img src={session.user.image} alt=""/>
                <br/>
                <button onClick={()=>signOut()}>Sign out</button>
            </div>
        )
    }else{
        return (
            <div>
                <p>No has iniciado sesion</p>
                <button onClick={()=>signIn()}>Sign In</button>
            </div>
        )
    }
}
export default AuthGoogleButton;