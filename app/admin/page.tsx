'use client'

import { redirect } from 'next/navigation';
import css from './styles.module.css';
import Notificaciones from '../componentes/notificaciones';
import { useState } from 'react';

export default function Login(){
  const [ notificacion, setNotificacion ] = useState('');
  function showNotif( notif: string ){
    setNotificacion(notif);
    setTimeout(()=>setNotificacion(''),1900);
  }
  async function submit(formData: FormData){
    const user = formData.get('user');
    const password = formData.get('password');

    const res = await fetch('/api',{
      method: 'POST',
      body: JSON.stringify({evento: 'login', data: {user, password}})
    })
    const { token, error } = await res.json();
    if(token != undefined){
      sessionStorage.setItem('token',token);
      redirect('/admin/dashboard')
    }
    if(error){
      showNotif('Error: datos incorrectos!')
    }
  }
  
  return <div className={css.tform}>
    { notificacion && <Notificaciones notificacion={ notificacion } />}
    <form className={css.form} action={submit}>
      <h2>Iniciar sesión</h2>
    <input type="text" name="user" placeholder="usuario: " />
    <input type="text" name="password" placeholder="contraseña: " />
    <button type="submit">Conectar</button>
  </form>
  </div>
}


/*"use client";
import { useState } from "react";
import css from "./styles.module.css";

type Formul = {
  nombre: string;
  apellido: string;
  fecha: string;
  salida: string;
  destino: string;
  tel: string;
};

function Formulario({ form }: { form: Formul }) {
  console.log("form componente: " + form);
  return (
    <div className={css.formcard}>
      <h2>Nueva consulta</h2>
      <p>Nombre: {form.nombre}</p>
      <p>Apellido: {form.apellido}</p>
      <p>Fecha: {form.fecha}</p>
      <p>Salida: {form.salida}</p>
      <p>Destino: {form.destino}</p>
      <p>Tel: {form.tel}</p>
    </div>
  );
}

export default function Login() {
  const [state, setState] = useState({});
  const [formularios, setFormularios] = useState([]);

  const Formularios = () => (
    <div className={css.formcards}>
      {formularios.map((form, index) => {
        return <Formulario key={index} form={form} />;
      })}
    </div>
  );

  async function login() {
    if (Object.keys(state).length < 2) return false;
    const r = await fetch("/api", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ credenciales: state }),
    });
    const res = await r.json();
    if (res.d) {
      setFormularios(res.d);
    } else {
      console.log(res.e);
    }
  }

  return (
    <div className={css.tform}>
      {formularios.length < 1 ? (
        <div className={css.form}>
          <h2>Conectarse como administrador</h2>
          <input
            onChange={(e) => {
              setState({ ...state, user: e.target.value });
            }}
          />
          <input
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
          <button
            onClick={() => {
              login();
            }}>
            Log-In
          </button>
        </div>
      ) : (
        <Formularios />
      )}
    </div>
  );
}
*/