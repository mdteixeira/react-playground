import { useState } from 'react';

function Contador() {
    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 1);
    }

    return (
        <>
            <h3 className="valor">{valor}</h3>
            <button type="button" onClick={handleClick}>
                +1
            </button>
        </>
    );
}

export default Contador;
