"use client";
import { RotateCcw, Search } from "lucide-react";
import { useMemo } from "react";
import CustomSelect from "./CustomSelect";
import { brands } from "@/data/brands";
import { useLanguage } from "./LanguageProvider";

export type Filters={query:string;brand:string;model:string;maxPrice:number|null};

export default function VehicleSearch({filters,onChange,onSearch,onReset}:{filters:Filters;onChange:(f:Filters)=>void;onSearch:()=>void;onReset:()=>void}){
 const{lang}=useLanguage();const sq=lang==="sq";
 const models=useMemo(()=>brands.find(b=>b.slug===filters.brand)?.models??[],[filters.brand]);
 const update=(patch:Partial<Filters>)=>onChange({...filters,...patch});
 const reset=()=>onReset();
 return <div className="search-panel reveal">
  <div className="search-input-field"><label>{sq?"Kërko veturën":"Search vehicle"}</label><div className="search-input-wrap"><Search size={17}/><input value={filters.query} onChange={e=>update({query:e.target.value})} onKeyDown={e=>{if(e.key==="Enter")onSearch()}} placeholder={sq?"p.sh. Mercedes GLE, BMW X7...":"e.g. Mercedes GLE, BMW X7..."}/></div></div>
  <CustomSelect label={sq?"Marka":"Brand"} placeholder={sq?"Zgjidh markën":"Choose brand"} value={filters.brand} onChange={(v)=>update({brand:v,model:""})} options={brands.map(b=>({label:b.name,value:b.slug,logo:b.icon}))}/>
  <CustomSelect label={sq?"Modeli":"Model"} placeholder={filters.brand?(sq?"Zgjidh modelin":"Choose model"):(sq?"Së pari zgjidh markën":"Choose a brand first")} value={filters.model} onChange={v=>update({model:v})} disabled={!filters.brand} options={models.map(m=>({label:m,value:m}))}/>
  <CustomSelect label={sq?"Çmimi maksimal":"Maximum price"} placeholder={sq?"Çmimi maksimal":"Maximum price"} value={filters.maxPrice?String(filters.maxPrice):""} onChange={v=>update({maxPrice:v?Number(v):null})} options={[20000,40000,60000,100000,150000,200000].map(x=>({label:`€${x.toLocaleString()}`,value:String(x)}))}/>
  <div className="search-actions"><button className="search-reset" type="button" onClick={reset}><RotateCcw size={18}/><span>{sq?"Pastro":"Clear"}</span></button><button className="search-submit" type="button" onClick={onSearch}><Search size={19}/>{sq?"Kërko":"Search"}</button></div>
 </div>
}
