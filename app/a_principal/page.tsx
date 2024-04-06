'use client'
import { useEffect, useState } from "react";
import css from "./styles.module.css";
import Image from "next/image";
import type { Noticia } from "../page";

export default function Principal() {
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
    <div id="inicio" className="total">
      <div className={css.principal}>
        <div className={css.top}>
        <a href={`${state ? state[0].id : ''}`}>
          <div className={css.noticiatop}>
            <div className={css.topimg}>
             <Image
             width={1000}
             height={1000}
             alt="test"
             src={"/foto1.jpg"}
             /> 
            </div>
            <h1>{state? state[0].titulo : 'TITULO DE PRUEBA'}</h1>
          </div>
          </a>
        </div>
        <div className={css.destacados}>

          <div className={css.noticiadestacada}>
          <a href={`${state ? state[1].id : 0}`}>
            <div className={css.destacadaimg}>        
          <Image
             width={500}
             height={500}
             alt="test"
             src={"/foto2.jpg"}
             /> 
          </div><h2>{`${state ? state[1].titulo : 'NOTICIA DESTACADA'}`}</h2></a></div>
          <div className={css.noticiadestacada}>
          <a href={`${state ? state[2].id : '0'}`}>
          <div className={css.destacadaimg}>
          <Image
             width={500}
             height={500}
             alt="test"
             src={"/foto3.jpg"}
             /> 
          </div><h2>{state ? state[2].titulo : 'TITULO'}</h2></a></div>
          <div className={css.noticiadestacada}>
          <a href={`${state ? state[3].id : 0}`}>
          <div className={css.destacadaimg}>
          <Image
             width={500}
             height={500}
             alt="test"
             src={"/foto4.jpg"}
             />   
          </div><h2>{state ? state[3].titulo : 'SUBTITULO DE PRUEBA'}</h2></a></div>
          <div className={css.noticiadestacada}>
          <a href={`${state ? state[4].id : 0}`}>
          <div className={css.destacadaimg}>
          <Image
             width={500}
             height={500}
             alt="test"
             src={"/foto5.jpg"}
             />   
          </div><h2>{state ? state[4].titulo : 'SUBTITULO DE PRUEBA'}</h2></a></div>
        </div>
      </div>
      <div className={css.anuncio}><p>anuncio</p></div>
    </div>
  );
}
