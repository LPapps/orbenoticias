import css from "./styles.module.css";

export default function Principal() {
  return (
    <div id="principal" className="total">
      <div className={css.card1}>
        <h1>LPAPPS</h1>
        <h2>diseño y desarrollo de aplicaciones web</h2>
      </div>
      <div className={css.card2}>
        <h3>Hacé tu emprendimiento más profesional</h3>
        <p>Mejorá el perfil público de tu emprendimiento con un sitio propio y conectá tus redes en un mismo lugar.</p>
        <h3>Llegá a más clientes</h3>
        <p>Permití que más clientes puedan encontrarte a través de google y otros buscadores.</p>
        <h3>Está activo 24/7</h3>
        <p>Todo el año, a toda hora, el cliente puede interactuar con tu emprendimiento.</p>
        <p>Permití que el cliente obtenga más información, o que haga su consulta a través de un formulario.</p>
        <h3>Tené tu lugar</h3>
        <p>Hagamos tu web como a vos más te guste, vos elegís los colores, formas o diseño.</p>
        <p>Dale <b>tu estilo</b> a <b>tu emprendimiento</b></p>
      </div>
    </div>
  );
}
