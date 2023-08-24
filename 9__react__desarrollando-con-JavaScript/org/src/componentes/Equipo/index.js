import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from 'hex-to-rgba';

function Equipo(props) {
    //Destructuración
    const { colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor} = props;

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id);
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