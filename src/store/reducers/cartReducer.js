const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0

}

const cartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case "ADD_TO_CARD" :
        const {product, Quantity} = action.payload;
        const check = state.products.find(pr => pr.id === product.id);
        if (check){
            return state;
        } else{
            const Tprice = state.totalPrice + product.discountPrice * Quantity;
            const TQuantities = state.totalQuantities + Quantity;
            product.Quantity = Quantity;
            return {
                ...state, products: [...state.products, product], totalPrice: Tprice, totalQuantities: TQuantities
            }
        }
        case "INC":
            findPro =  state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)
            findPro.Quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.discountPrice, totalQuantities: state.totalQuantities+1
            } 

        case "DEC":
            findPro =  state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)
            if(findPro.Quantity > 1){
                findPro.Quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.discountPrice, totalQuantities: state.totalQuantities-1
                }

            }else{
                return state;
            }
            case "REMOVE":
                findPro =  state.products.find(product => product.id === action.payload)
                const filtered = state.products.filter(product => product.id !== action.payload)
                return {
                    ...state,
                    products: filtered,
                    totalPrice: state.totalPrice - findPro.discountPrice * findPro.Quantity, totalQuantities: state.totalQuantities-findPro.Quantity
                }

         
        default:
        return state;
    }
     
}

export default cartReducer
