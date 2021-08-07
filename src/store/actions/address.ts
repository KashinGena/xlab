import { ActionTypes, ActionAddresses } from "../../types/address"
import {Dispatch} from 'redux'
const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "1910e0901f3e5e23ca0367ceff8fe3715acaa0de";



const options:RequestInit = {
    method: "POST",
    mode: 'cors' as RequestMode,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: ''
}

export const fetchAddresses = (search:string) => {
    return (dispatch:Dispatch<ActionAddresses>) => {
        dispatch({
            type:ActionTypes.FETCH_ADDRESSES
        })
        try {
            options.body=JSON.stringify({query: search})
           fetch(url, options)
                .then(response => response.json())
                .then(data =>
                    {console.log(data);
                      
                        
                    
                     dispatch({
                         type:ActionTypes.FETCH_ADDRESSES_SUCCESS,
                         payload:data
                     })})
                
            
            
        }
        catch(e) {

        }
    }
}


