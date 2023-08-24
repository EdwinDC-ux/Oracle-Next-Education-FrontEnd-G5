import Colaborador from "../Colaborador";
import "./Equipo.css";

function Equipo(props) {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const {colaboradores, eliminarColaborador} = props;

    const estiloSection = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={estiloSection}>
                <input
                    type="color"
                    className="input-color"
                    value={colorSecundario}
                    onChange={(e) => {
                        
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores" >
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        /> )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;