import {IAction, IState, IReducer} from "./types";


export const actionTypes = {
    SET_USER: "SET_USER"
};

const reducer: IReducer = (state: IState, action: IAction) => {
    let nextState: IState = state;
    switch(action.type) {
        case actionTypes.SET_USER:
            nextState={...state, user: action.user};
            return nextState;        
    }
    return nextState;
};

export default reducer;