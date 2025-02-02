import React, {createContext, useContext, useReducer} from "react";
import {IReducer, IState, initialState, IReducerDispatch} from "../../state/types";
import reducer from "../../state/reducer";

interface IProps {
    reducer: IReducer;
    initialState: IState;
    children?: JSX.Element;
}

const StateContext = createContext<IReducerDispatch>({state: initialState, dispatch: () => null});

export const StateProvider = (props: IProps) => {
    const [state, dispatch] = useReducer<IReducer>(reducer, initialState);
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {props.children}
        </StateContext.Provider>
    );    
};

const useStateValue = () => useContext(StateContext);

export default useStateValue;

