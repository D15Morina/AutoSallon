"use client";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
export default function Header(){
 const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);const{lang,setLang}=useLanguage();
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>40);onScroll();window.addEventListener("scroll",onScroll);return()=>window.removeEventListener("scroll",onScroll)},[]);
 const sq=lang==="sq";const links=[[sq?"Ballina":"Home","/#ballina"],[sq?"Veturat":"Cars","/#veturat"],[sq?"Shërbimet":"Services","/#sherbimet"],[sq?"Rreth nesh":"About us","/#rreth-nesh"],[sq?"Kontakti":"Contact","/#kontakti"]];
 return <header className={`header ${scrolled?"header--scrolled":""}`}><a className="brand" href="/#ballina"><span className="brand-mark">V</span><span><b>VETURA IME</b><small>AUTO SALONI</small></span></a><nav className="desktop-nav">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><div className="header-actions"><div className="lang-switch" aria-label={sq?"Ndrysho gjuhën":"Change language"}><button className={sq?"active":""} onClick={()=>setLang("sq")}>SQ</button><span>/</span><button className={!sq?"active":""} onClick={()=>setLang("en")}>EN</button></div><a className="button button--small" href="/#veturat">{sq?"Shiko veturat":"View cars"}</a><button type="button" className="menu-button" aria-label={sq?"Hap menunë":"Open menu"} onClick={()=>setOpen(true)}><Menu/></button></div>{open&&<div className="mobile-menu"><button type="button" aria-label={sq?"Mbyll menunë":"Close menu"} onClick={()=>setOpen(false)}><X/></button><div className="mobile-brand">AUTO SALONI<br/><strong>VETURA IME</strong></div>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="mobile-call" href="tel:+38344000000"><Phone size={18}/> +383 44 *** ***</a></div>}</header>
}
