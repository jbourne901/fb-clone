import IUser from "../types/user";


export interface IAction {
    type: string;
    user?: IUser;
}
export interface IState {
    user?: IUser;
}
export const initialState: IState = {
    user: undefined
};

export type IReducer = (state: IState, action: IAction) => IState;

export interface IReducerDispatch {
    state: IState, 
    dispatch: React.Dispatch<IAction>
};

