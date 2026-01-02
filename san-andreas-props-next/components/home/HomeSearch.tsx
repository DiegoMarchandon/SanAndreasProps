'use client';
import { useState, useEffect, ChangeEvent, useRef } from "react";
import ButtonHome from "../../components/UI/ButtonHome";
import zonasCiudades from "../../lib/data/zonas";

export default function HomeSearch() {

    // arreglo para guardar múltiples refs para la lista <li> de sugerencias
    // const LiRef = useRef<(HTMLLIElement | null)[]>([]);

    interface Sugerencia {
        inicio: string;
        medio: string;
        fin: string;
    }

    // función para retornar implícitamente el array con las claves actuales + la clave por defecto añadida en la primera posición.
    const addKey = () => ["Todas las localidades",...Object.keys(zonasCiudades)];
    
    const SELECT_VALUES: string[] = addKey();
    const ZONES_VALUES: string[] = Object.values(zonasCiudades).flat();
    
    const [ciudades, setCiudades] = useState<string[]>(ZONES_VALUES);
    const [inputProp, setInputProp] = useState("");
    const [selectProp, setSelectProp] = useState(SELECT_VALUES[0]);
    const [suggestions, setSuggestions] = useState<Sugerencia[]>([]);
    
    // useEffect(() => {
    //     handleInputChange;

    //     console.log("input: " + inputProp);
    // },[inputProp])

    /**
     * Maneja el cambio de input text con las letras ingresadas
     * en el input de la página home
     * 
     * @param event - Evento que se dispara al escribir en el input
     * @returns void - Actualiza el estado con las sugerencias encontradas
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        let coincidencias: Sugerencia[] = [];
        setInputProp(event.target.value); // almaceno el input text ingresado    

        Object.values(zonasCiudades).forEach((arr) => {
            for(let i = 0; i < arr.length; i++){
                let zonaLowerCase = arr[i].toLowerCase();
                let inputLowerCase = event.target.value.toLowerCase();
                if(zonaLowerCase.includes(inputLowerCase) && inputLowerCase.length > 0){
                    let buscado = zonaLowerCase.indexOf(inputLowerCase);
                    if(buscado !== -1){
                        let inicio = arr[i].substring(0,buscado);
                        let posicionFin = buscado + inputLowerCase.length;
                        let medio = arr[i].substring(buscado, posicionFin);
                        let fin = arr[i].substring(posicionFin);
                        coincidencias.push({inicio, medio, fin});
                    }

                }
            }
        });
        setSuggestions([]);
        return setSuggestions(coincidencias);
    }

    /**
     * Maneja el cambio del valor del select 
     * 
     * @param event - Evento que se dispara al cambiar el select
     * @returns void - Actualiza el estado de sugerencias encontradas
     */
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if(inputProp === ""){
            if(event.target.value !== "Todas las localidades"){
                setSelectProp(event.target.value); //almaceno el select value seleccionado
                for(let key in zonasCiudades){
                    if(key === event.target.value){
                        setCiudades(zonasCiudades[key]);
                    }
                }
            }else{
                setCiudades(ZONES_VALUES);
            }
        }else{
            
        }
    }

    /**
     * Unifica el objeto con la sugerencia fragmentada en strings, con el fin de ponerlo en el input text.
     * 
     * @param suggestionObj - Objeto con las sugerencias fragmentadas
     */
    const replaceInputText = (suggestionObj: Sugerencia) => {
        if(suggestionObj){
            let inputText = suggestionObj.inicio + suggestionObj.medio + suggestionObj.fin;
            console.log("distinto de null. Valor: ", inputText);
            // const inputText = LiRef.current.innerText;
            setInputProp(inputText); 
            setSuggestions([]);
        }
    }

    return (
        <div>
            <div className="bg-white grid grid-rows-3 grid-rows-[auto_auto_1fr] w-fit p-2 h-fit rounded-4 rounded-2xl">
                <div className="flex row-start-1 h-auto row-span-1">
                    <ButtonHome text="Localidades" />
                    <ButtonHome text="Emprendimientos" />
                    <ButtonHome text="Alquileres" />
                    <ButtonHome text="Propiedades" />
                </div>
                <div className="flex p-2 row-start-2 h-auto row-span-1">
                    <input className="bg-gray-300 placeholder-gray-600 p-2 text-black" value={inputProp} type="text" placeholder="busco una propiedad en " onChange={handleInputChange}/>
                    <select className="bg-gray-300 ml-2 p-2 text-gray-700" value={selectProp} onChange={handleSelectChange} >
                        {SELECT_VALUES.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                    ))}
                    </select>

                    <button type="submit" className="bg-gray-700 ml-2 text-white p-2">Buscar</button>
                </div>
                
                {/* contenedor de sugerencias */}
                {suggestions.length > 0 && (
                    <div className="bg-gray-700 row-start-3 row-span-1 w-full max-h-50 overflow-y-auto">
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li className="cursor-pointer" key={index} onClick={() => replaceInputText(suggestion)}>{suggestion.inicio}<b>{suggestion.medio}</b>{suggestion.fin}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}