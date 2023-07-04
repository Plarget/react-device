import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  'g': {
    id: 1,
    name: 'Любительская селфи-палка',
    img: '/images/products/selfie-stick.jpg',
    price: 500,
  },
  'gd': {
    id: 1,
    name: 'Любительская селфи-палка',
    img: '/images/products/selfie-stick.jpg',
    price: 500,
  }
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      const { name, img, id, price } = action.payload
        state[uuidv4()] = { name, img, price, id }
    },
    deleteFromBasket(state, action) {
      delete state[action.payload]
    }
  }
})

export const { addToBasket, deleteFromBasket} = basketSlice.actions
export default basketSlice.reducer
