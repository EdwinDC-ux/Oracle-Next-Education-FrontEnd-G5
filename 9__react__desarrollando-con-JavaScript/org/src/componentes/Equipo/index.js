import Colaborador from "../Colaborador";
import "./Equipo.css";

function Equipo(props) {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const {colaboradores} = props;

    const estiloSection = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={estiloSection}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores" >
            {
                colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} /> )
            }
        </div>
    </section>
}

export default Equipo;