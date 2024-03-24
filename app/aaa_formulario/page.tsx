"use client";
import { useState } from "react";
import css from "./styles.module.css";

export default function Formulario() {
  const [nbtn, setNbtn] = useState("Enviar datos");
  const [formulario, setFormulario] = useState({});

  const hash = async () => {
    const r = await fetch("/api", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({evento: 'agregarFormulario', data: formulario}),
    });
    const rt = await r.json();
    if (rt.g) {
      setNbtn("Datos enviados con éxito!");
    } else {
      console.log(rt.e);
      setNbtn("Error al enviar formulario");
    }
  };

  const enviarForm = async () => {
    console.log(formulario);
    setNbtn("enviando form...");
    await hash();
  };
  return (
    <div id="formulario" className={css.formt}>
      <div className={css.form}>
        <input
          placeholder="nombre"
          onChange={(e) => {
            setFormulario({ ...formulario, nombre: e.target.value });
          }}
        />
        <input
          placeholder="apellido"
          onChange={(e) => {
            setFormulario({ ...formulario, apellido: e.target.value });
          }}
        />
        <input
          placeholder="teléfono"
          type="number"
          onChange={(e) => {
            setFormulario({ ...formulario, tel: e.target.value });
          }}
        />
        <input
          placeholder="lugar de salida"
          onChange={(e) => {
            setFormulario({ ...formulario, salida: e.target.value });
          }}
        />
        <input
          placeholder="lugar de destino"
          onChange={(e) => {
            setFormulario({ ...formulario, destino: e.target.value });
          }}
        />
        <input
          type="date"
          onChange={(e) => {
            setFormulario({ ...formulario, fecha: e.target.value });
          }}
        />
        <button disabled={nbtn == 'Datos enviados con éxito!' ? true : false} onClick={enviarForm}>{nbtn}</button>
      </div>
    </div>
  );
}
