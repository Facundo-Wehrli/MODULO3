import "../style.css/estilos.css"

const Ejemplo3 = props => {
    return (
        <div>
            <h1>Ejemplo si uso google maps</h1>
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656499.429478064!2d118.98670155286936!3d32.20321942328187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sar!4v1667830845751!5m2!1sen!2sar" style={{ width:1000, height:450, border: 0 }}></iframe>
            </div>
        </div>
    )
}



export default Ejemplo3;