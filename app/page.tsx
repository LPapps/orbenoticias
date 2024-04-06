'use client'
import { useEffect, useState } from "react";
import Principal from "./a_principal/page";
import Secundario from "./aa_secundario/page";
import Footer from "./aaaa_footer/page";

export type Noticia = {
  titulo: string,
  imagen: string,
  id: number
}
export default function Home() {
  const [ state, setState ] = useState<Noticia[]>()
  useEffect(()=>{
    getData();
  },[])
  useEffect(()=>{console.log(state)},[state])
  async function getData(){
    const dat = await fetch('/api',{
    method: 'POST',
    headers: new Headers({'content-type':'application/json'}),
    body: JSON.stringify({evento: 'pseudodb'})
    });
    const { array } = await dat.json();
    setState(array)
  }
  return (
    <>
    {state && <Principal data={state}/>}
    {state && <Secundario data={state}/>}
    <Footer />
    </>
  );
}
