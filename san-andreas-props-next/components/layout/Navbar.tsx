import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-gray-800">
            <h1 className="text-center">Navbar</h1>
            <nav className="bg-gray-300 text-black flex justify-center">
                <ul className="flex flex-row space-x-10">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/propiedades">Propiedades</Link></li>
                    <li><Link href="/mapa">Mapa</Link></li>
                    <li><Link href="/origen">Origen</Link></li>
                    <li><Link href="formulario.html" className="admSesion">Iniciar Sesión</Link></li>
                </ul>
            </nav>
        </div>
    );
}