 const initState = {
     products:[
         {id:1, name:"woman suit for summer season", image: "1.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:2, name:"woman suit for summer season", image: "2.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:3, name:"woman suit for summer season", image: "3.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:4, name:"woman suit for summer season", image: "4.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:5, name:"woman suit for summer season", image: "12.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:6, name:"woman suit for summer season", image: "6.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:7, name:"woman suit for summer season", image: "7.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:8, name:"woman suit for summer season", image: "8.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
         {id:9, name:"woman suit for summer season", image: "11.jpg", price: 799, discount: 30, discountPrice: 799 - 30 / 100 * 799, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi, blanditiis cupiditate rerum vel magnam alias quibusdam nam expedita nemo doloribus provident quae eos facilis quis eius excepturi velit quidem?"},
     ],
     product:{}
     
     
 }

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default:
        return state;
    }
     
}

export default ProductReducer
