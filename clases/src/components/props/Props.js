const Ejemplo1Props = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}
const Ejemplo2Props = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}> {elemento}</li>)}
        </ul>
    )

}
const Ejemplo3Props = props =>
    ({ titulo, subtitulo, cuerpo }) => {
        return (
            <div>
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <h5>{cuerpo}</h5>
            </div>

        )
    }

const Ejemplo4Props = props => {
    return (
        // cuando ejecutamos el evento onChange
        // el input va a tomar lo que sucede en la funcion cambiarValor 
        // entonces recibimos la propiedad cambiarValor
        <label>ver en consola :
            <input type="text" onChange={(e) =>
                props.cambiarValor(e.target.value)} />
        </label>
    )
}

/**
 * If the eventoClick prop is passed to the component, then call the eventoClick function with the
 * string "Me clickeaste" as an argument.
 */
const Ejemplo5Props = props => {
    // defino la funcion que va a manejar el evento del click
    const handleClick = e => {
        // if > validar que se este pasando la propiedad (prop) que necesito (eventoClick)
        if (props.eventoClick)
            // si la estoy pasando me sale me clickeaste
            props.eventoClick("Me clickeaste")
    }
    return (
        <p>
            <button onClick={handleClick}>Clickeame!</button>
        </p>
    )
}


export {
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props,
    Ejemplo4Props,
    Ejemplo5Props,
}
