import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
    return (
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
        </form>
    );
}
