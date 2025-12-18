import ButtonHome from "../../components/UI/ButtonHome";

export default function HomeSearch() {
    return (
        <div>
            <div className="bg-white w-fit p-2 h-fit rounded-4 rounded-2xl">
                <div className="flex">
                    <ButtonHome text="Localidades" />
                    <ButtonHome text="Emprendimientos" />
                    <ButtonHome text="Alquileres" />
                    <ButtonHome text="Propiedades" />
                </div>
                <div className="flex justify-center p-2">
                    <input className="bg-gray-300 placeholder-gray-600 p-2" type="text" placeholder="busco una propiedad en " />
                    <select className="bg-gray-300 ml-2 p-2 text-gray-700">
                        <option value="Todas">Todas las localidades</option>
                        <option value="USD">Los Santos</option>
                        <option value="ARS">San Fierro</option>
                        <option value="ARS">Las Venturas</option>
                    </select>
                </div>
            </div>
        </div>
    )
}