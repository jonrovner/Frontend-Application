import { GET_CONFIG, GET_PRODUCT, UPDATE_PRODUCT } from "./actions";


const initialSatate = {
    
    config: {},
    product: {},

}

function rootReducer(state = initialSatate, {type, payload}){
    switch(type){
        case GET_CONFIG: {
            return {
                ...state,
                config: payload
            }
        }
        case GET_PRODUCT: {
            return {
                ...state,
                product: payload
            }
        }
        case UPDATE_PRODUCT: {
            return {
                ...state,
                product: payload
            }
        }
        default:
            return state


    }
}

export default rootReducer