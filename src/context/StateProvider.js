<<<<<<< HEAD
import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider= ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
=======
import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider= ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
>>>>>>> 8147932 (Initial commit with all project files)
