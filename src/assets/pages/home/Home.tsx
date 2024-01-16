import { useState } from 'react';
import Contador from '../contador/Contador';
import Tarefa from '../tarefa/Tarefa';

interface homeProps {
    titulo: string;
    texto: string;
}

function Home(props: homeProps) {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            {isLogged ? (
                <div
                    style={{
                        textAlign: 'center',
                        fontSize: '120%',
                    }}
                    id="container"
                >
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
                    <Contador />
                    <Tarefa />
                </div>
            ) : (
                <div>
                    <h1>Você não está logado.</h1>
                    <button onClick={() => setIsLogged(true)}>Logar</button>
                </div>
            )}
        </>
    );
}

export default Home;
