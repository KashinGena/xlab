import {applyMiddleware,createStore,combineReducers} from "redux"
import thunk from 'redux-thunk'
import {addressReducer} from './reducers/address'

export const rootReducer = combineReducers({
    address: addressReducer,
    
  });
  
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store