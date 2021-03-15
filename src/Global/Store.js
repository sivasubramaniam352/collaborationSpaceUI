import { createStore } from 'redux'

const initialState = {
  ss: 'responsive',
  user:{
    name:'siva',
    
  }
}

const changeState = (state = {...initialState}, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'user':
      return {...state, ...rest }
    case 'currentWs':
      return {...state, ...rest}
    case 'currentCh':
      return {...state, ...rest}
    
    default:
      return state
  }
}


const store = createStore(changeState, loadFromLocalStorage());

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;