import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addToNotification(state, action) {
      const { id, text } = action.payload
      return [...state, { id, text }]
    },
    deleteFromNotification(state, action) {
      const array = [...state]

      return array.filter((element) => {
        return action.payload !== element.id
      })
    }
  }
})

export const { addToNotification, deleteFromNotification } = notificationSlice.actions
export default notificationSlice.reducer