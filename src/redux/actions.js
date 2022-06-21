import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types"

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

export function enable_buttons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function disable_buttons() {
    return {
        type: DISABLE_BUTTONS
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function async() {
   return function(dispatch) {
    dispatch(disable_buttons())
    setTimeout(() => {
        dispatch(increment())
    }, 1500)
    dispatch(enable_buttons())
   }
}

