import './Colaborador.css';

function Colaborador(props) {
    const {nombre,foto,puesto} = props.datos

    return <div className="colaborador">
        <div className="encabezado">
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;