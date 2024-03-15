import css from "./styles.module.css";
export default function Nav() {
  return (
    <div className={css.total}>
      <div className={css.logo}></div>
      <div className={css.links}>
        <a href="#principal">Inicio</a>
        <a href="#informacion">Información</a>
        <a href="#formulario">Contacto</a>
      </div>
    </div>
  );
}
