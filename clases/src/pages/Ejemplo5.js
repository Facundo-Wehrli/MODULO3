import '../style.css/ejemplo5.css';
import { useEffect, useState } from 'react';


const Ejemplo5 = props => {

    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([])

    /* Fetching data from the API and setting the state of the component. */
    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }

        cargarDatos();
    }, []);


    return (
        <>

            <h1>Hola soy la página Ejemplo 5 API</h1>
            {cargando ? <p>cargando datos ...</p> :
                <div className="personajes">
                    {personajes.map(personaje => (
                        <div className="personaje" key={personaje}>
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name} />
                                </div>
                                <div className="datos">
                                    <h6>Especie: {personaje.species === 'Human' ? 'Humano' : personaje.species}</h6>
                                    <h6>Vivo: {personaje.status === 'Alive' ? 'Si' : 'No'} </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                }
        </>
    )  
}

export default Ejemplo5;