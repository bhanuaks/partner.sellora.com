"use client";
import { decodeJwt } from "@/Http/helper"; 
import { createContext, useEffect, useState } from "react";



export const userAppContaxt = createContext();

export const UserAppProvider =({ children })=>{

    const [globalUser, setGlobalUser] = useState({
        user:null
    })


     useEffect(() => {
            
            const userToken = document.cookie.split("; ").find((row)=>row.startsWith('affiliateUserAuthToken'))?.split("=")[1]; 
            //console.log('usercontextttttt', userToken)
            if (userToken) {
                try { 
                    const userData = decodeJwt(userToken);
                    //console.log('usertokkkkk', userData.user)
                    setGlobalUser((previousData) => ({
                        ...previousData,
                        user: userData.user,
                    }));
                } catch (error) {
                    console.error("Error decoding JWT:", error);
                }
            }
        }, []);


 

      return (
            <userAppContaxt.Provider value={{ globalUser, setGlobalUser }}>
                {children}
            </userAppContaxt.Provider>
        );
}