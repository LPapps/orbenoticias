
import Principal from "./a_principal/page";
import Secundario from "./aa_secundario/page";
import Footer from "./aaaa_footer/page";

export type Noticia = {
  titulo: string,
  imagen: string,
  id: number
}
export default function Home() {
  return (
    <>
    <Principal />
    <Secundario/>
    <Footer />
    </>
  );
}
