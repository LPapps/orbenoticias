'use client'
import css from "./styles.module.css";
import { useRef,useState } from "react";
export default function Nav() {
  const [state,setState] = useState(false);
  const tref = useRef<any>(null);
  function sb(estado:boolean){
    if(estado){
      tref.current.style.width = '80%'
    } else {
      tref.current.style.width = '0'
    }
    setState(estado);
  }
  function ssb(){
    sb(!state);
  }
  return (
    <div className={css.total}>
      <div className={css.logo}>
        <a href="/#inicio"><h2>ORBE NOTICIAS</h2></a>
      </div>
      <div className={css.links}>
        <a href="/#inicio">Inicio</a>
        <a href="/#secundario">Noticias</a>
        <a href="/#contacto">Contacto</a>
      </div>
      <div className={css.sidebar} ref={tref}>
        <h3>Bienvenid@</h3>
        <a onClick={ssb} href="#principal">Inicio</a>
        <a onClick={ssb} href="#informacion">Información</a>
        <a onClick={ssb} href="#formulario">Contacto</a>
      </div>
      <button className={css.btn} onClick={ssb}>☰</button>
    </div>
  );
}
