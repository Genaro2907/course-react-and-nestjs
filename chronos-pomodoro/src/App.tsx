import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Heading attr='String' attr2={123}>
                Chronos Pomodoro
            </Heading>
            <p>
                Bem-vindo ao Chronos Pomodoro! Este é um aplicativo para
                ajudá-lo a gerenciar seu tempo usando a técnica Pomodoro.
            </p>
            <p>
                O Pomodoro é uma técnica de gerenciamento de tempo que divide o
                trabalho em intervalos, tradicionalmente de 25 minutos,
                separados por breves pausas. O objetivo é melhorar a
                concentração e a produtividade.
            </p>
            <p>
                Para começar, basta clicar no botão "Iniciar Pomodoro" e o
                cronômetro começará a contagem regressiva. Após 25 minutos de
                trabalho, você receberá uma notificação para fazer uma pausa de
                5 minutos. Depois de quatro ciclos de trabalho, você pode fazer
                uma pausa mais longa de 15-30 minutos.
            </p>
            <p>
                Esperamos que este aplicativo ajude você a manter o foco e a
                alcançar seus objetivos de forma mais eficiente. Boa sorte!
            </p>
        </>
    );
}
