import Cryptr from "cryptr";
import { NextRequest, NextResponse } from "next/server";

    type Login = {
      user: string,
      password: string
    }
    type Backend = {
      id: string,
      hash: string
    }

const pseudodb = [
      {
          id: 1,
          principal: true,
          ubicacion: 1,
          titulo: "HABRÁ BECAS EDUCATIVAS PARA TRABAJADORES DEL TRANSPORTE Y FAMILIARES",
          imagen: "foto1.jpg",
          contenido: [
              {
                  parrafo: `Lanza el Instituto de Educación de Aguascalientes (IEA) un programa de becas para concesionarios, operadores y personal administrativo del servicio de transporte público del estado; ellos y sus familiares podrán participar en la convocatoria para estudiar el bachillerato, una carrera universitaria o un posgrado durante el ciclo escolar 2024-2025.
  
                  La convocatoria tiene alcance para hijos o el cónyuge de los trabajadores del sistema de transporte público; las y los postulantes deberán seleccionar máximo tres instituciones de educación superior participantes en esta convocatoria.
                  
                  La fecha límite para que las y los interesados registren su solicitud de beca es el 24 de mayo de 2024; deberán ingresar a la plataforma www.iea.gob.mx/convocatorias, realizar el proceso de postulación y entregar documentos. La publicación de los resultados la dará a conocer el IEA durante la primera semana de julio. `
              },
              {
                  subtitulo: "Las instituciones educativas participantes son: ",
                  parrafo: `
                  🌐 Universidad Tecnológica de Aguascalientes (UTA)
                  🌐 Universidad Tecnológica del Norte de Aguascalientes (UTNA)
                  🌐 Universidad Tecnológica El Retoño (UTR)
                  🌐 Universidad Tecnológica de Calvillo (UTC)
                  🌐 Universidad Tecnológica Metropolitana de Aguascalientes (UTMA)
                  🌐 Universidad Villasunción
                  🌐 Global University
                  🌐 Universidad Cuauhtémoc
                  🌐 Universidad del Desarrollo Profesional (UNIDEP)
                  🌐 Universidad Británica
                  🌐 Universidad Interamericana del Desarrollo (UNID)
                  🌐 Centro de Estudios Superiores del Estado de Aguascalientes
                  🌐 Instituto Octavio Paz
                  🌐 Tecnológico Universitario de Aguascalientes (TUA)
                  🌐 Edge Hub
                  🌐 Universidad de la Ciudad de Aguascalientes (UCAGS)
                  🌐 Universidad Aurora
                  🌐 Universidad de Alta Dirección y Emprendimiento (UNADE)
                  🌐 Universidad Santa Fe
                  🌐 Colegio Latinoamericano de Estudios Avanzados (CLEA)
                  🌐 Instituto de Estudios Universitarios Optimis Duos Mundi
                  🌐 Universidad Internacional
                  🌐 Instituto de Posgrados en Psicología y Educación (IPPSE)
                  🌐 Universidad de Investigación Tecnológica y Salud (UNITSA)`
              }
          ],
          tags: ["orbenoticias","terrones","Gobierno del Estado de Aguascalientes"],
          editor: "x-men"
      },
      {
          id: 2,
          principal: true,
          ubicacion: 2,
          titulo: "SE VIENE OTRA TEMPORADA DE \"GREY'S ANATOMY\" 👏🏻🌐",
          imagen: "foto2.jpg",
          contenido: [
              {
                  parrafo: `Mientras esperamos el desenlace de la temporada No. 20, ya ha sido confirmada la 21 por la ABC y se espera llegué en el 2025, en el aniversario No. 20 de la serie 🌐..... 
                  Información: Metropolitano Aguascalientes.....`
              }
          ],
          tags: ["orbenoticias","terrones"],
          editor: "x-men"
  
      },
      {
          id: 3,
          principal: true,
          ubicacion: 3,
          titulo: "EL \"REY DEL MORBO\", DANI FLOW,  TRAJO EL \"REGGAETON CHAMPAGNE\" AL OCHO SEGUNDOS 🤙🏻🌐",
          imagen: "foto3.jpg",
          contenido: [
              {
                  parrafo: `Siendo las 23:00 hrs aproximadamente, Victor Daniel Valladares Barrientos, mejor conocido como Dani Flow, salió al escenario del antro texano "Ocho Segundos" en Aguascalientes el pasado 31 de marzo. 
                  El llamado "Rey del Morbo" puso a perrear hasta el subsuelo a su público al ritmo de "Reggaeton Champagne", "Martillazo", "Las Que No Tienen Papá" y más, durante la hora que duró su concierto 🌐`, 
              }
          ],
          tags: ["orbenoticias","daniflow","Ocho Segundos Aguascalientes","terrones"],
          editor: "x-girl"
      },
      {
          id: 4,
          principal: true,
          ubicacion: 4,
          titulo: "YA SE ENCUENTRA ABIERTA LA CONVOCATORIA PARA EL SEGURO \"JEFAS MADRES DE FAMILIA\"",
          imagen: "foto4.jpg",
          contenido: [
              {
                  parrafo:  `Este programa permitirá que las y los hijos de madres jefas de familia estén asegurados y reciban un apoyo económico en caso de que falte su madre. 
                  La convocatoria del Seguro "Jefas Madres de Familia" está dirigida a mujeres mayores de edad que sean madres solteras de escasos recursos y que residan en el estado de Aguascalientes. 
                  Las interesadas en participar en el proceso de selección deberán presentarse en la Sedeso, ubicada en Boulevard José Ma. Chávez #3202, Ciudad Industrial, en un horario de 8:00 a 15:30 horas, para entregar la documentación requerida; solicitud de incorporación al programa; copia legible de identificación oficial vigente, con domicilio en el estado de Aguascalientes y comprobante de domicilio. 
                  Para consultar la convocatoria se puede visitar: https://www.facebook.com/SEDESOAgs?mibextid=kFxxJD y para mayores informes, podrán comunicarse al teléfono 449 910 21 21 ext. 4203 🌐`
              }
          ],
          tags: ["orbenoticias","terrones","Gobierno del Estado de Aguascalientes"],
          editor: "x-man"
      },
      {
          id: 5,
          principal: true,
          ubicacion: 5,
          titulo: "SHAKIRA ESTÁ SIENDO CANCELADA PORQUE NO LE GUSTÓ UNA PELÍCULA 😱😱😱",
          imagen: "foto5.jpg",
          contenido: [
              {
                  parrafo: `En una reciente entrevista que le hicieron en la revista "Allure" dónde también engalana la portada, la cantante colombiana dió su opinión respecto a la película Barbie: 
                  "Mis hijos lo odiaron absolutamente. Sintieron que era castrante. Y estoy de acuerdo, hasta cierto punto. Estoy criando a dos niños. Quiero que ellos también se sientan poderosos mientras respetan a las mujeres.
                  Me gusta la cultura pop cuando intenta empoderar a las mujeres sin privar a los hombres de su posibilidad de ser hombres, de proteger y proveer también.
                  Creo en darle a las mujeres todas las herramientas y la confianza de que podemos hacerlo todo sin perder nuestra esencia, sin perder nuestra feminidad.
                  Creo que los hombres tienen un propósito en la sociedad y las mujeres también tienen otro propósito. Nos complementamos y ese complemento no debe perderse".
                  Esto ha desatado muchas críticas hacía la cantante, convirtiendo estás declaraciones en tendencia, llamándola hipócrita y se....xis....ta 🌐`
              }
          ],
          tags: ["orbenoticias","terrones"],
          editor: "z-men"
      },
      {
          id: 6,
          titulo: "LA POLICÍA CIBERNÉTICA TE APOYA EN DELITOS O INCIDENTES RELACIONADOS CON EL USO DEL INTERNET 🌐",
          imagen: "foto6.jpg",
          contenido: [
              {
                  parrafo: `¿Fuiste víctima de una extorsión telefónica; alguien creó un perfil falso de tus redes sociales; hicieron mal uso de tus fotografías; robaron tu información confidencial? Si no sabes qué hacer, la Secretaría de Seguridad Pública te atiende a través de la Policía Cibernética. 
                  Solo tienes que llamar al número de emergencia 911, al 449 910 20 55, extensiones 6605, 1710 y 1711, o vía WhatsApp al 449 346 2341 y describir tu situación, incluyendo datos relevantes como tiempo y fecha específica del suceso. 
                  Una vez que hayas presentado el reporte o denuncia, tienes que seguir cualquier instrucción y/o recomendación que te hagan los operadores de la Policía Cibernética 🌐`
              }
          ],
          tags: ["orbenoticias", "terrones", "Gobierno del Estado de Aguascalientes "],
          editor: "x-men"
      },
      {
          id: 7,
          titulo: "DE LA QUE NOS SALVAMOS BANDA 😅🤘🏻🌐",
          imagen: "foto7.jpg",
          contenido: [
              {
                  parrafo: `Shakira reveló que inicialmente ofreció al grupo Maná colaborar en "La Tortura" en 2005 pero la recharazon, invitando posteriormente a Alejandro Sanz. 
                  Y ya sabemos que pasó con "La Tortura", se convirtió en la canción en español más vendida de la década de los 2000 😬🌐..`
              }
          ],
          tags: ["orbenoticias","terrones"],
          editor: "x-men"
      },
      {
          id: 8,
          titulo: "NUNCA DEJES DE CREER EN TI 🥰🙏🏻",
          imagen: "foto8.jpg",
          contenido: [
              {
                  parrafo: `A sus 8 años, un pequeño Eugenio Derbez veía la entrega de los Oscar con su mamá (Silvia Derbez), dejaba todo plan para ver la premiación y decía: “Yo algún día quiero estar ahí”.
                  Muchos años después, cumplió su sueño y la película "Coda", dónde el es uno de los protagonistas, recibió el Oscar a "Mejor Película".
                  En el escenario, recibiendo la estatuilla, tira un beso al cielo y cumple el sueño de toda su vida, recuerda, nunca es tarde para cumplir lo que alguna vez dejaste pendiente 🙏🏻🥰🌐`
              }
          ],
          tags: ["orbenoticias","terrones"],
          editor: "fifty-cent"
      },
      {
          id: 9,
          titulo: "DR. SIMI ANUNCIA RETIRO INDEFINIDO, NO LE DIGAN A ADELE 😢💔",
          imagen: "foto9.jpg",
          contenido: [
              {
                  parrafo: `“Pero como saben, todo famoso merece una pausa y así como muchos rockstars han anunciado su retiro de los escenarios, ha llegado mi momento. Estoy cansado, jefe. Es por eso que les aviso que a partir del día de hoy me doy una pausa indefinida en mi carrera, gracias totales”, dijo.
                  La realidad es que el Dr. Simi se tomará unas merecidas vacaciones por toda la República 🥰🌐.....`
              }
          ],
          tags: ["orbenoticias","terrones"],
          editor: "x-men"
      },
      {
          id: 10,
          titulo: "MÉXICO MÁGICO Y MUSICAL 🇲🇽 🎵😅",
          imagen: "foto10.jpg",
          contenido: [{
              parrafo: `El empresario hotelero Ernesto Coppel, publicó un video para quejarse del ruido que hacen con la música de banda en Mazatlán, señalando que molestan a los turistas extranjeros, en respuesta, todos los músicos de Mazatlán se fueron a tocarle canciones de banda afuera de su hotel 🤣🌐`
          }],
          tags: ["orbenoticias","terrones"],
          editor: "ATR"
      },
      {
          id: 11,
          titulo: "¿UN CONCIERTO SIN CELULARES? PLACEBO LO HIZO POSIBLE.....OH ALGO ASÍ 🤔🌐",
          imagen: "foto11.jpg",
          contenido: [{
              parrafo: `La noche del 26 de marzo la banda británica Placebo regresó al Teatro Metropólitan y puso una condición, no sacar los celulares en todo el concierto. 
              Hubo algunos fans que a pesar de que la seguridad estaba muy atenta, intentaron sacar algún video. La cosa es que el propio Brian Molko se dio cuenta de un fan que estaba grabando y paró el concierto por un rato, pidió de nuevo que dejaran de grabar o de lo contrario, se irían. “No me hagan enojar otra vez”, dijo el vocalista...... 
              ¿Creen que hizo bien en actuar tan drásticamente? 🤔😬.....`
          }],
          tags: ["orbenoticias","terrones"],
          editor: "marley"
      },
      {
          id: 12,
          titulo: "EL CONCIERTO DE MADONNA EN BRASIL, SERÁ ALGO NUNCA ANTES VISTO 😱🤩🌐",
          imagen: "foto12.jpg",
          contenido: [{
              parrafo: `Con un proceso de montaje que llevará un mes y medio, Madonna ha solicitado un escenario colosal para alcanzar a una audiencia de un millón de personas. 
              La infraestructura del concierto ha sido denominada por los patrocinadores como la pista de baile más grande del mundo y se espera que establezca un récord como el concierto más grande jamás realizado. 
              Además, Madonna ha insistido en que todos los asistentes, incluso los de atrás, puedan disfrutar plenamente del espectáculo, por lo que se han pedido 16 pantallas gigantes y parlantes de sonido ubicados estratégicamente para una experiencia inmersiva en toda la playa en Copacabana y lo mejor, activara el turismo hacia un 35 % en Brasil y la economía se disparará aproximadamente un 25% 🤘🏻🌐`
          }],
          tags: ["orbenoticias","terrones"],
          editor: "xp"
      }
  ]
export async function POST( req: NextRequest ) {
    const { evento, data, token, id } = await req.json();
    if(evento == 'pseudodb') {
      if(!id){
        const nuevoArray = pseudodb.map(i => ({
          titulo: i.titulo,
          imagen: i.imagen,
          id: i.id
        }))
        return NextResponse.json({array: nuevoArray})
      } else {
        const data = pseudodb.filter(item => item.id == id);
        return NextResponse.json({noticia: data[0]})
      }
    }
    // ------------------------------------------------------------------
    // CRIPTOGRAFIA
    // ------------------------------------------------------------------
    const cr = new Cryptr(`${process.env.HASH}`);
    // ------------------------------------------------------------------
    // SOLICITUD AL BACKEND
    // ------------------------------------------------------------------
    async function enviarDatos (evento: string, hash: string) {
      try {
        const url = `${process.env.APIURL}/api/${evento}`
        const r = await fetch(url, {
          method: "POST",
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify({ hash }),
        });
        const rta = await r.json();
        return rta;        
      } catch (error) {
        return { error: 'error en fetch'}
      }
    };
    // ------------------------------------------------------------------
    // FUNCIONES 
    // ------------------------------------------------------------------
    function encriptar (obj : object ) {
      const hash = cr.encrypt(JSON.stringify(obj));
      return hash;
    }
    function desencriptar (hash: string){
      const o = cr.decrypt(hash);
      return o;
    }
    function armarToken () {
      const crToken = new Cryptr(process.env.TOKEN || 'error_env')
      const cincoMinutos = new Date().getTime() + 300000
      const token = crToken.encrypt(cincoMinutos.toString());
      return token;
    }
    function login (data: Login) {
      const { user, password } = data;
      if(user === process.env.USER && password === process.env.PASSWORD){
        const token = armarToken();
        return token;
      } else {
        return false
      }
    }
    // ------------------------------------------------------------------
    // MANEJANDO EVENTOS
    // ------------------------------------------------------------------
    if(evento == 'login'){
      const token = login(data);
      if(token) return NextResponse.json({ token })
      return NextResponse.json({ error: 'credenciales incorrectas' })
    }
    if(evento == 'agregarFormulario'){
      const o = {
        evento,
        formulario: data,
        web: process.env.WEB
      };
      const hash = encriptar(o);
      const rta = await enviarDatos(evento, hash);
      if(rta.e) return NextResponse.json({ e: true })
      if(rta.g) return NextResponse.json({ g: true });
    }
    if(evento == 'checkearPapelera'){
      const o = {
        evento,
        token,
        web: process.env.WEB
      };
      const hash = encriptar(o);
      const rta = await enviarDatos(evento, hash);
      if(rta.e) return NextResponse.json({ e: true });
      if(rta.h){
        const arrayDesencriptado = JSON.parse(desencriptar(rta.h));
        const itemsLegibles = arrayDesencriptado.map(( item: string ) => {
        const formDesencriptado = JSON.parse(desencriptar(item));
        return formDesencriptado;
      });
      return NextResponse.json({ p: itemsLegibles});
      }
    }
    if(evento == 'pedirFormularios'){
      const o = {
        evento,
        token,
        web: process.env.WEB
      }
      const hash = encriptar(o);
      const rta = await enviarDatos(evento, hash);
      if(rta.e) return NextResponse.json({ e: true });
      if(rta.h){
      const arrayDesencriptado = JSON.parse(desencriptar(rta.h));
      const itemsLegibles = arrayDesencriptado.map(( item: Backend ) => {
        const formDesencriptado = desencriptar(item.hash);
        return ({ id: item.id, form: JSON.parse(formDesencriptado) })
      });
      return NextResponse.json({ d: itemsLegibles });}
    }
    if(evento == 'eliminarFormulario'){
      const o = {
        evento,
        token,
        id,
        web: process.env.WEB
      }
      const hash = encriptar(o);
      const rta = await enviarDatos(evento, hash);
      if(rta.e) return NextResponse.json({ e: true })
      if(rta.x) return NextResponse.json({ x: true });
    }
    if(evento == 'check'){
      if(!token) return NextResponse.json({e: 'token error'});

      const o = { evento, token, web: process.env.WEB };
      const hash = encriptar(o);
      const rta = await enviarDatos(evento, hash);
      if(rta.e) return NextResponse.json({ e: true });
      return NextResponse.json({ estado: rta.estado });
    }
    if(evento == 'antiSleep'){
      const o = { evento, token, web: process.env.WEB, url: process.env.WEBURL };
      const hash = encriptar(o);
      const rta = await enviarDatos(evento, hash);
      if(rta.e) return NextResponse.json({ e: true });
      if(rta.a) return NextResponse.json({ a: true });
      return NextResponse.json({ a: false });
    }
  // respuesta default si no se cumpe ninguna condicion
  return NextResponse.json({ r: true });
}
export async function GET( req: NextRequest ) {
    return NextResponse.json({200:200});
}