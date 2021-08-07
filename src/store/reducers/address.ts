import { AddressAction, AddressState, ActionTypes } from "../../types/address"

const initialState:AddressState = {
    addresses:[],
    loading:false,
    error:null
}

export const addressReducer = (state = initialState, action:AddressAction):AddressState => {
    switch(action.type) {
        case (ActionTypes.FETCH_ADDRESSES): {
            return {
                ...state,
                loading:true
            }
        }
        case(ActionTypes.FETCH_ADDRESSES_ERROR): {
            return {
                ...state,
                error:action.payload
            }
        }
        case (ActionTypes.FETCH_ADDRESSES_SUCCESS): {
  
            
            return {
                ...state,
                addresses:action.payload
            }
        }
        default:
            return state
    }
}