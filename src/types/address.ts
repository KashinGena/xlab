

export interface AddressState {
    addresses:any[],
    loading:Boolean,
    error: null | String
}

export enum ActionTypes {
    FETCH_ADDRESSES="FETCH_ADDRESSES",
    FETCH_ADDRESSES_SUCCESS="FETCH_ADDRESSES_SUCCESS",
    FETCH_ADDRESSES_ERROR="FETCH_ADDRESSES_ERROR"
}

export interface AddressAction {
    type: String,
    payload?: any
}

interface fetchAddresses {
    type:ActionTypes.FETCH_ADDRESSES,

}
interface fetchAddressesSuccess {
    type:ActionTypes.FETCH_ADDRESSES_SUCCESS,
    payload:any[]
}
interface fetchAddressesError {
    type:ActionTypes.FETCH_ADDRESSES_ERROR,
    payload:String
}
export type ActionAddresses = fetchAddresses | fetchAddressesError |fetchAddressesSuccess
