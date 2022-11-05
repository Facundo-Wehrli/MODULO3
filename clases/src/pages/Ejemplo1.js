import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from '../components/props/Props';
const nombre2 = "Pepe Tapia"
const lista = ["Manzana", "Banana", "Pera", "Frutillas"];

const mostrarValor = valor => {
    console.log(valor)
}
const Ejemplo1 = props => {
    return (
        <div>
            <h1>Ejemplo de Propiedades</h1>
            {/* ejemplo de propiedad simple y la puedo reutilizar */}
            <Ejemplo1Props nombre="Facundo" />
            <Ejemplo1Props nombre={nombre2} />
            {/* ejemplo de pasar lista de elementos  */}
            <Ejemplo2Props elementos={lista} />
            <hr />
            {/* ejemplo de multiples variables y destructuring  */}
            <Ejemplo3Props titulo="La Noticia" subtitulo="Soy el subtitulo de la Noticia" cuertpo="Lorem  aefssaui jseafjasefoñ j
            seafioseajioasfease jjeisafñseaf esjiaoñ
            safeisejasoiefjseaoj seaojeasoñ jesaoijseasejaoifesajseaoiñesja 
            saefesoai ajsi eeasjiesajaesj  easalsojeasjloie ajsoij
             aesjasas eije asjijs a" />
            <hr />
            <Ejemplo4Props cambiarValor={mostrarValor} />
            <Ejemplo5Props eventoClick={mostrarValor} />


        </div>

    )
}

export default Ejemplo1;

