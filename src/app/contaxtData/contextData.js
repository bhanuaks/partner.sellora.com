"use client";
import { decodeJwt } from "@/Http/helper"; 
import { createContext, useEffect, useState } from "react";

 
export const AppContext = createContext();

 
export const AppProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState({
        user: null,
        
    });

    useEffect(() => {
        
        
        const userToken = document.cookie.split("; ").find((row)=>row.startsWith('affiliateUserAuthToken'))?.split("=")[1];        
        //document.cookie.split("; ").find((row)=>row.startsWith('affiliateUserAuthToken'))?.split("=")[1];
        
        //console.log('contexttttttttttttt',userToken)
        if (userToken) {
            try {
                // Decode the JWT and set User data
                const userData = decodeJwt(userToken);
                //console.log('contexttttttttttttt',userData)
                setGlobalData((previousData) => ({
                    ...previousData,
                    user: userData.user,
                }));
            } catch (error) {
                console.error("Error decoding JWT:", error);
            }
        }

        
    }, []);

    return (
        <AppContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </AppContext.Provider>
    );
};
