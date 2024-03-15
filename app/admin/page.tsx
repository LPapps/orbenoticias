"use client";
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
