import { useState } from "react";
function FuncComponent() {
    const [value, updateValue] = useState(0)

    return <div>
            Componente funcional
            <p>
                <button onClick={() => {
                    updateValue(value - 1);
                }}>-</button>
                {value}
                <button onClick={() => {
                    updateValue(value + 1);
                }}>+</button>
            </p>
        </div>
}

export default FuncComponent;