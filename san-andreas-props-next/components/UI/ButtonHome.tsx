import React from "react";

interface ButtonProps {
    text: string;
}

const ButtonHome = ({ text }: ButtonProps) =>{
    return(
        <button className="bg-orange-500 m-2 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            {text}
        </button>
    )
}

export default ButtonHome;