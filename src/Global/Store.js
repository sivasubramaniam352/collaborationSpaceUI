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
    default:
      return state
  }
}

const store = createStore(changeState)
export default store;