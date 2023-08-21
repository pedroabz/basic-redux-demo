import { combineReducers, createStore } from "redux"


const intialCounterState = {
    value: 0
}

const initialTextState = {
    description: 'initial test description'
}

function counterReducer(state = intialCounterState, action: any){
    switch (action.type){
        case "counter/increment":
            return {
                ...state,
                value: state.value + 1
            };        
        default:
            return state;
    }    
}

function initialTextReducer (state = initialTextState, action: any){
    switch (action.type){
        case "text/modify":
            console.log(action)
            return {
                ...state,
                description: action.modifiedText
            };        
        default:
            return state;
    }    
}

const rootReducer = combineReducers({
    counter: counterReducer,
    text: initialTextReducer,
  });

// As we can see, this one is deprecated.
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );