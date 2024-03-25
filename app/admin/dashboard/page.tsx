'use client'
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import css from './page.module.css';
import Notificaciones from "../../componentes/notificaciones";
type FormData = {
    id: string,
    form: Form
}

type Form = {
    nombre: string,
    apellido: string,
    salida: string,
    destino: string,
    fecha: string
    tel: string
}

function Formulario ( { data, consulta } : { data: FormData, consulta: Function } ) {
    return <div className={css.formulario}>
        <p><b>NUEVA CONSULTA</b></p>
        <p>nombre: {data.form.nombre}</p>
        <p>apellido: {data.form.apellido}</p>
        <p>salida: {data.form.salida}</p>
        <p>destino: {data.form.destino}</p>
        <p>fecha: {data.form.fecha}</p>
        <p>tel: {data.form.tel}</p>
        <p>id: {data.id}</p>
        <button onClick={()=>consulta('eliminarFormulario', data.id)}> Eliminar </button>
    </div>
}

export default function Dashboard () {
    const [ token, setToken ] = useState('');
    const [ forms, setForms ] = useState([]);
    const [ state, setState ] = useState({model: 'not load', db: 'not load'});
    const [ notificacion, setNotificacion ] = useState('');

    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if(!token) redirect('/');
        setToken(token);
    },[]);
    useEffect(()=>{consulta('check')},[token]);
    
    const Formularios = () => (<>{forms.map((data, index) => <Formulario key={ index } data={ data } consulta={ consulta }/>)}</>);

    function notificar( notif: string){
        setNotificacion(notif);
        setTimeout(()=>setNotificacion(''),1900);
    }
    async function consulta (evento: string, id?: string) {
        const res = await fetch('/api',{
            method: 'POST',
            headers: new Headers({'content-type':'application/json'}),
            body: JSON.stringify({ evento, token, id })
        })
        const rta = await res.json();
        if(rta.r) notificar('evento default, hubo algun error');
        // MANEJANDO EVENTOS DE LA RESPUESTA DEL BACKEND
        if(evento == 'pedirFormularios'){
            if(rta.e) notificar('Error al pedir formularios');
            if(rta.d) setForms(rta.d);
        }
        if(evento == 'eliminarFormulario'){
            if(rta.e) notificar('Error al eliminar formulario');
            if(rta.x) return true;
        }
        if(evento == 'check'){
            if(rta.e) notificar('Error checkeando los datos');
            if(rta.estado) setState(rta.estado);
        }
        if(evento == 'antiSleep'){
            if(rta.e) notificar('Error al añadir web al loop');
            if(rta.a) notificar('Web añadida al loop de ping');
            if(!rta.a) notificar('La web ya estaba en el loop de ping');
        }
    }


    return <div className={css.total}>
        { token && <>
        { notificacion && <Notificaciones notificacion={ notificacion } />}
            <div className={css.comandos}>
                <h1>DASHBOARD</h1>
                <p>db: {state.db}</p>
                <p>md: {state.model}</p>
            <button onClick={()=>{consulta('check')}}> Estado del sv </button>
            <button onClick={()=>{consulta('pedirFormularios')}}> Pedir formularios </button>
            <button onClick={()=>{consulta('antiSleep')}}> Anti Sleep </button>
            <button onClick={()=>{notificar('test')}}>Notificar</button>
        </div>
        <div className={css.data}>
            {forms.length < 1 ? <h1>Nada aun...</h1> : <Formularios />}
        </div></>}
    </div>
}