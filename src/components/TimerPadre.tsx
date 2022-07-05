import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  
    const [milisegundos, setMilisegundos] = useState(1000)
  
    return (
    <>
    <span>Milisegundos {milisegundos}</span>
    
    <br />
    
    <button className="btn btn-success m-2"
            onClick={() => setMilisegundos(1000)} >
        1000
    </button>

    <button className="btn btn-success m-2"
            onClick={() => setMilisegundos(2000)} >
        2000
    </button>


    <Timer milisegundos={milisegundos}/>
    </>
    )
};
