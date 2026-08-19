import { useTaskContext } from '../../contexts/TaskContext';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
    const { setState } = useTaskContext();

    function handleClick() {
        setState(prevState => ({
            ...prevState,
            formattedSecondsRemaining: '00:10',
        }));
    }
    return (
        <form className='form' action=''>
            <button type='button' onClick={handleClick}>
                Log State
            </button>
            <div className='formRow'>
                <DefaultInput
                    id='meuInput'
                    labelText='Task'
                    type='text'
                    placeholder='Digite Algo'
                />
            </div>
            <div className='formRow'>
                <p>Próximo intervalo é de 25 minutos</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
        </form>
    );
}
