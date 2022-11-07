import { useState } from "react";

const Ejemplo1Estado = props => {

    /* A destructuring assignment. */
    const [activo, setActivo] = useState(true);

    const toggleActivo = e => {
        setActivo(!activo)
    }
    return (
        <div>
            <input type="text" placeholder="clickear boton" disabled={!activo} />
            <button onClick={toggleActivo}>{activo ? "Desabilitar" : "Activar"}</button>
        </div>
    )
}

//Ejemplo2

function Ejemplo2Estado(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className="container">
            <div className="counter">
                <h3>{`Contador:${counter}`}</h3>
            </div>
            <div className="buttonGroup">
                <button className="success" onClick={() => setCounter(counter + 1)}> + </button>
                <button className="error" onClick={() => setCounter(counter - 1)}> - </button>
            </div>
        </div>
    )
}
export {
    Ejemplo1Estado,
    Ejemplo2Estado
}