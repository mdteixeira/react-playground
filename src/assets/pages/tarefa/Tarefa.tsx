import { useEffect, useState } from 'react';

function Tarefa() {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns, você concluiu a tarefa! 🎉');
        }
    }, [completed]);

    function handleClick() {
        setCompleted(true);
    }

    return (
        <>
            <h2>Tarefa</h2>
            <p>{tarefa}</p>
            <button onClick={handleClick}>Concluir tarefa</button>
        </>
    );
}

export default Tarefa;
