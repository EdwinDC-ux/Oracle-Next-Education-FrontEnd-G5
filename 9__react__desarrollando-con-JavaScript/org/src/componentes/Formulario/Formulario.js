import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = () => {

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Manejar el envio', evento);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formuilario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required = {true} />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
            <ListaOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;