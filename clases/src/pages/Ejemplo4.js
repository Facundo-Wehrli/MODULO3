import alumnos from "../data/alumnos.json"
const Ejemplo4 = props => {

    return (
        /* "<> </>" It's a shorthand for React.Fragment. */
        <>
            <h1>Hola soy la pagina Ejemplo 4 Json</h1>
            <ul>
                {alumnos.map(alumno => (  

                    <li>{alumno.nombre} {alumno.apellido} - edad: ({alumno.edad})</li>

                    )

                )}

            </ul>

        </>

    )
}

export default Ejemplo4