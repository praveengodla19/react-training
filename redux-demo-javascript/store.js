import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit/+esm'
import counterReducer from './slice.js'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store
