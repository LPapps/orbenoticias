'use client';
import css from "./styles.module.css";
import type { Noticia } from "../page";
import { useEffect, useState } from "react";
function Row({noticia}:{noticia:Noticia}){
  return <a href={`${noticia.id}`}><div className={css.noticia}><h3>{noticia.titulo}</h3></div></a>
}
export default function Secundario() {
  const [ state, setState ] = useState<Noticia[]>();
  useEffect(()=>{
    getData();
  },[])
  async function getData(){
    const r = await fetch('/api',{
      method:'POST',
      headers: new Headers({'content-type':'application/json'}),
      body: JSON.stringify({evento: 'pseudodb'})
    })
    const { array } = await r.json();
    setState(array)
  }
  return (
    <div id="secundario" className="total">
      <div className={css.secundario}>
        <h2>NOTICIAS ANTERIORES</h2>
        <div className={css.sec_anteriores}>
          {state ? state.map((not, index) => {
            return <Row noticia={not} key={index} />
          }): ''}
        </div>
      </div>
      <div className={css.anuncio}>
        <p>anuncio</p>
      </div>
    </div>
  );
}
