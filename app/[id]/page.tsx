'use client';
import css from "./ndinamica.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";


export type Contenido = {
    subtitulo?: string,
    parrafo: string
}
export type DataDB = {
    id: number,
    principal: boolean,
    titulo: string,
    imagen: string,
    contenido: Contenido[],
    tags: string[],
    editor: string
}
function Data({noticia}:{noticia: Contenido}){
    return <div className={css.noticia}>
    {noticia.subtitulo ? <h2>{noticia.subtitulo }</h2> : ''}
    <p>{noticia.parrafo}</p>
    </div>
}
function ContenidoDinamico({ contenido } : { contenido: Contenido[]}){
    return contenido.length > 1 ? contenido.map((noticia, i ) => <Data key={i + 2} noticia={noticia}/>) : <Data noticia={contenido[0]} />
}
function Tags({ tags }:{tags: string[]}){
    return <div className={css.tags}>
        {tags.map(tag=><p>{tag}</p>)}
    </div>
}
export default function NoticiaDinamica({ params } : {params: { id:number }}){
    const [ state, setState ] = useState<DataDB>();
    useEffect(()=>{
        getData(params.id)
    },[])
    const getData = async (id:number) => { 
        const r = await fetch('/api',{
            method: 'POST',
            headers: new Headers({"content-type":"application/json"}),
            body: JSON.stringify({evento: "pseudodb", id})
        });
        const { noticia } = await r.json();
        setState(noticia);
    }
    return <div className="total">
        {state ? <div className={css.ndinamica}>
            <h1>{state.titulo}</h1>
            <div className={css.foto}>
                <Image 
                width={1000}
                height={1000}
                alt="test"
                src={`/${state.imagen}`}
                />
            </div>
            <ContenidoDinamico contenido={state.contenido}/>
            <Tags tags={state.tags}/>
            <h4>Editor: {state.editor}</h4>
            </div> : ''}
</div>
}