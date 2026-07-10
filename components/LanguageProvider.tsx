"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
export type Language = "sq" | "en";
type Ctx={lang:Language;setLang:(l:Language)=>void;toggle:()=>void};
const LanguageContext=createContext<Ctx|null>(null);
export default function LanguageProvider({children}:{children:React.ReactNode}){
 const[lang,setLangState]=useState<Language>("sq");
 useEffect(()=>{const saved=localStorage.getItem("vetura-ime-language") as Language|null;if(saved==="sq"||saved==="en")setLangState(saved)},[]);
 const setLang=(l:Language)=>{setLangState(l);localStorage.setItem("vetura-ime-language",l);document.documentElement.lang=l};
 const value=useMemo(()=>({lang,setLang,toggle:()=>setLang(lang==="sq"?"en":"sq")}),[lang]);
 return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
export function useLanguage(){const ctx=useContext(LanguageContext);if(!ctx)throw new Error("useLanguage must be used inside LanguageProvider");return ctx}
