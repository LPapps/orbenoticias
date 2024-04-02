'use client';
import { useState } from "react";
import css from "./styles.module.css";
export default function Formulario() {
  const [state, setState] = useState('Enviar Formulario');
  const [disabled, setDisabled] = useState(false);

  function boton(form:FormData){
    setDisabled(true);
    setState('Enviando Formulario...');
    enviarForm(form);
  }
  const enviarForm = async (form: FormData) => {
    const data = {
      nombre: form.get("nombre"),
      apellido : form.get("apellido"),
      telefono : form.get("telefono"),
      consulta : form.get("consulta")
    }
    const r = await fetch("/api", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({evento: 'agregarFormulario', data}),
    });
    const rt = await r.json();
    if(rt.g)setState('Enviado con éxito!')
    if(rt.e){setDisabled(false);setState('Error: Reintente por favor')}   
  };
  return (
    <div id="formulario" className="total">
      <form action={boton} className={css.form}>
        <h2>Contacto</h2>
        <p>Nombre</p>
        <input type="text" name="nombre" />
        <p>Apellido</p>
        <input type="text" name="apellido" />
        <p>Teléfono</p>
        <input type="number" name="telefono" />
        <p>Consulta</p>
        <textarea name="consulta" />
        <input disabled={disabled} type="submit" value={state}/>
      </form>
    </div>
  );
}
