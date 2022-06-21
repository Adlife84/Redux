import { INCREMENT, DECREMENT } from "./types"

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function async() {
   return function(dispatch) {
    setTimeout(() => {
        dispatch(increment())
    }, 1500)
   }
}