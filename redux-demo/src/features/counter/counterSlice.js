import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    await new Promise(res => setTimeout(res, 800))
    return amount
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, status:'idle' },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => { state.status='loading' })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status='idle'
        state.value += action.payload
      })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = state => state.counter.value
export default counterSlice.reducer
