import Cryptr from "cryptr";
import { NextRequest, NextResponse } from "next/server";

    // enviar respuesta al backend y despues devolver algo

export async function POST( req: NextRequest ) {
    const datos = await req.json();
    // armar hash
    const cr = new Cryptr('paracetamol');
    const hash = cr.encrypt(JSON.stringify({...datos,web:'viajesleiva'}));
    // query al back
    const enviarDatos = async (hash: string, tipo: string) => {
        const url = `http://localhost:3001/api/${tipo}`
        const r = await fetch(url, {
          method: "POST",
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify({ hash }),
        });
        const rta = await r.json();
        return rta;
    };
      // handle query
    const { formulario, credenciales } = datos;
    let r2;
    if(formulario != undefined) r2 = await enviarDatos(hash,'form');
    if(credenciales != undefined) r2 = await enviarDatos(hash,'login');
    // si devuelve data es inplicito que es un login correcto
    if(r2.e) return NextResponse.json({e: r2.e})
    if(r2.g) return NextResponse.json({ g:true })
    if(r2.d){
      const formularios = r2.d.map((form: any) => JSON.parse(cr.decrypt(form)));
      return NextResponse.json({d: formularios })}
    // cambiar con variable de entorno                                    
    
}
export async function GET( req: NextRequest ) {
    return NextResponse.json({200:200})
}