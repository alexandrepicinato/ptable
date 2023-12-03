import React, { createContext, useContext, useState } from "react";
export const FiltrerDataContext = createContext();
export default function FiltrerDataProvider({children}){
    const[FiltrerDataid, setFiltrerDataid]= useState("0");
    return <FiltrerDataContext.Provider value={{FiltrerDataid,setFiltrerDataid}}>{children}</FiltrerDataContext.Provider>
}
export function useFiltrerData(){
    const context= useContext(FiltrerDataContext)
    const {FiltrerDataid, setFiltrerDataid} = context;
    return {FiltrerDataid, setFiltrerDataid}

}