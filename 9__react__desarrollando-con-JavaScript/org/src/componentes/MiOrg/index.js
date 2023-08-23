import { useState } from "react"
import './MiOrg.css';

function MiOrg() {
    // Estado - hooks
    // useState
    //useState()
    //const [nombreVariable,functionActualiza] = useState(valorInicial)

    const [nombre, actualizarNombre] = useState("harland");
    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento");
        actualizarMostrar(!mostrar);
    }

    return <section className="orgSection">
        <h3 className ="title">Mi Organización {nombre} </h3>
        <img src="/img/add.png" alt="add" onClick = { manejarClick } />
    </section>
}

export default MiOrg;