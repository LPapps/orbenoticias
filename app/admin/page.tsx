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
      body: JSON.stringify({evento: 'login', data: { user, password }})
    })
    const { token, error } = await res.json();
    if(token != undefined){
      sessionStorage.setItem('token',token);
      redirect('/admin/dashboard')
    }
    if(error){
      showNotif('Datos incorrectos!')
    }
  }
  
  return <div className={css.tform}>
    { notificacion && <Notificaciones notificacion={ notificacion } />}
    <form className={css.form} action={submit}>
      <h2>Iniciar sesión</h2>
    <input type="text" name="user" placeholder="usuario: " />
    <input type="password" name="password" placeholder="contraseña: " />
    <button type="submit">Conectar</button>
  </form>
  </div>
}