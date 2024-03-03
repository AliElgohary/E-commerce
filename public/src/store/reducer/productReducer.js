const INITIAL_VALUE = {
    products: [],
}

export default function productsReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'GET_PRODUCTS' : return {
            ...state,
            products: action.payload
        }
        default : return state
    }
}
    