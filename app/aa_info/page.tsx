import css from "./styles.module.css";

export default function Informacion() {
  return (
    <div id="informacion" className="total">
      <div className={css.card1}>
        <h2>INFORMACIÓN</h2>
        <h3>¿Que tipo de web puedo ofrecerte?</h3>
        <p>En este momento puedo ofrecerte una <b>Landing Page</b>, que es una web <b>simple</b>.</p>
        <h3>¿Para que sirve una Landing Page?</h3>
        <p>Una web simple sirve para mejorar tu perfil público o el de tu emprendimiento</p>
        <h4>Tu perfil público:</h4>
        <p>Tu currículum en una web te da un perfil más <b>profesional</b>, podés agregar tu web a tu <b>tarjeta presonal</b>, permite que empleadores te encuentren a través de google.</p>
        <h4>El perfil de tu emprendimiento:</h4>
        <p>Una web dedicada a tu emprendimiento permite que consigas más clientes, gestionar turnos (ej en una peluquería), que vean tu trabajo (ej en la construcción/albañilería) o que te envíen un formulario (ej alguien que hace viajes: camioneros, puerta a puerta, etc.)</p>
        <h3>PRÓXIMAMENTE TIENDA ONLINE</h3>
      </div>
      <div className={css.card2}>
        <h2>COSTOS DEL SERVICIO</h2>
        <p>Los costos de una web simple son (en pesos argentinos y dólares):</p>
        <ul>
          <li>Construcción: $25000 o $25</li>
          <li>Compras necesarias: $25000 o $25</li>
          <li>Mantenimiento por mes: $5000 o $5</li>
        </ul>
        <p>TOTAL: $50000 o $50</p>
        <h3>Estos costos incluyen</h3>
        <p>El diseño y programación de tu web, la compra del dominio (por un año) y servicio de hosting.</p>
        <p>Un panel de administrador donde podés gestionar los formularios que te envían.</p>
        <p><i>Los datos del formulario están <b>cifrados</b> y cuentan con protocolos de seguridad, toda la información está encriptada.</i></p>
        <p>Es necesario que tengas un nombre pensado para tu dominio (puede ser tu nombre o el de tu emprendimiento) y preferentemente un logo.</p>
        <p>Esto es relativo al tipo de web, y <b>podemos acordar distintos costos</b>.</p>
      </div>
    </div>
  );
}
