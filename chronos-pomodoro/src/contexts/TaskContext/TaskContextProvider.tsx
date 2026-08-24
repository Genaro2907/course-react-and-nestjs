import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
    children: React.ReactNode;
};
export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState(initialTaskState);

    const [numero, dispatch] = useReducer((state, action) => {
        console.log(state, action);

        switch (action) {
            case 'INCREMENTE':
                return state + 1;
            case 'DECREMENTE':
                return state - 1;
            case 'INICIAL':
                return 0;
        }
        return state;
    }, 0);

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {/* {children} */}
            <h1>O Numero é: {numero}</h1>
            <button onClick={() => dispatch('INCREMENTE')}>Incrementar</button>
            <button onClick={() => dispatch('DECREMENTE')}>Decrementar</button>
            <button onClick={() => dispatch('INICIAL')}>Reset</button>
        </TaskContext.Provider>
    );
}
