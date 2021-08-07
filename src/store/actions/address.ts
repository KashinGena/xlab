
interface AddressState {
    addresses:any[],
    loading:Boolean,
    error: null | String
}

enum ActionTypes {
    FETCH_ADDRESSES="FETCH_ADDRESSES",
    FETCH_ADDRESSES_SUCCESS="FETCH_ADDRESSES_SUCCESS",
    FETCH_ADDRESSES_ERROR="FETCH_ADDRESSES_ERROR"
}

interface AddressAction {
    type: String,
    payload?: any
}

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
                addresses:action.payload
            }
        }
        default:
            return state
    }
}