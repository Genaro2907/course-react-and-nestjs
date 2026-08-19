import type { HomeProps } from '../../pages/Home';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

export function MainForm({ state }: HomeProps) {
    return (
        <form className='form' action=''>
            <div className='formRow'>
                <DefaultInput
                    id='meuInput'
                    labelText='Task'
                    type='text'
                    placeholder='Digite Algo'
                />
            </div>
            <div className='formRow'>
                <p>Próximo intervalo é de {state.config.workTime} minutos</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
        </form>
    );
}
