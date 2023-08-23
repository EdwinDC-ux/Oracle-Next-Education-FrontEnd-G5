import Colaborador from "../Colaborador";
import "./Equipo.css";

function Equipo(props) {
    //Destructuración
    const {colorPrimario, colorSecundario, titulo} = props.datos;

    const estiloSection = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={estiloSection}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores" >
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo;