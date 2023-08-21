import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counter-slice";

const initialTextState = {
    description: 'initial test description'
}

// left on purpose to show retrocompatibility
function initialTextReducer (state = initialTextState, action: any){
    switch (action.type){
        case "text/modify":
            return {
                ...state,
                description: action.modifiedText
            };        
        default:
            return state;
    }    
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: initialTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;