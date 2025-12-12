import store from './store.js'
import { increment, decrement, incrementByAmount } from './slice.js'

// DOM elements
const countSpan = document.getElementById('count')
const incBtn = document.getElementById('inc')
const decBtn = document.getElementById('dec')
const add5Btn = document.getElementById('add5')

// initial render
function render() {
  countSpan.textContent = store.getState().counter.value
}

render()

// subscribe to store updates
store.subscribe(render)

// button events
incBtn.onclick = () => store.dispatch(increment())
decBtn.onclick = () => store.dispatch(decrement())
add5Btn.onclick = () => store.dispatch(incrementByAmount(5))
