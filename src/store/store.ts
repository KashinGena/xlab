import {applyMiddleware,createStore} from "redux"
import thunk from 'redux-thunk'
import {addressReducer} from './reducers/address'


const store = createStore(addressReducer,applyMiddleware(thunk))

export default store