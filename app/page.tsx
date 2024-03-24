import Nav from "./a_nav/page";
import Principal from "./a_principal/page";
import Informacion from "./aa_info/page";
import Formulario from "./aaa_formulario/page";
import Footer from "./aaaa_footer/page";
export default function Home() {
  return (
    <>
      <Nav />
      <Principal />
      <Informacion />
      <Formulario />
      <Footer />
    </>
  );
}
