import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Heading } from './components/Heading';

export function App() {

    // const [number, setNumber] = useState(() => {
    //     return 0;
    // });

    const [number, setNumber] = useState(0);
    function handleClick() {
        // setNumber(prevState => prevState + 1);
        setNumber(1);
    }
    return (
        <>
            <Heading>Contador: {number}</Heading>
            <button onClick={handleClick}>Adicionar</button>

            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form action='' className='form'>
                    <div className='formRow'>
                        <DefaultInput
                            id='meuInput'
                            labelText='Task'
                            type='text'
                            placeholder='Digite Algo'
                        />
                    </div>
                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='formRow'>
                        <Cycles />
                    </div>
                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon />} color='green' />
                    </div>
                </form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    )
}
