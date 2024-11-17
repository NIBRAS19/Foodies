import React, { useReducer } from "react";

const DispatchContext = React.createContext();
const StateContext = React.createContext();

const AppProvider = (props) => {

    const initialState = {
        cartItems: [],
    };
    
    const reducer = (state, action) => { 
        switch (action.type) {
            case "add-to-cart":
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems, 
                        action.payload,],
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export { StateContext, DispatchContext, AppProvider };
