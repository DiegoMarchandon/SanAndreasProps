import { oldLondon } from '../app/fonts';

/* 
cuando pasamos propiedades a un componente, la función del componente en realidad lo traduce como si fuera un objeto:
 {mBottom: "mt-10"}
 Por eso, en nuestra función, al recibir el objeto, lo debemos desestructurar para acceder y aplicar las props.
 Ventajas:
 - Reutilización: Si el componente crece y recibe más props, no debemos escribir {
 mBottom: string; pTop: }
*/
type HeaderProps = {
    mBottom: string
}

export default function Header({mBottom}: HeaderProps){

    return (
        <div className={`${mBottom}`}>
            <h1 className={`${oldLondon.className} font-oldlondon text-5xl text-center text-black text-shadow-outline`} 
                style={{ textShadow: "-1px -1px 0 rgb(255, 252, 249), 1px -1px 0 rgb(255, 252, 249), -1px 1px 0 rgb(255, 252, 249), 1px 1px 0 rgb(255, 252, 249)" }}>
                    San Andreas Properties(Header)
            </h1>
        </div>
    );
}