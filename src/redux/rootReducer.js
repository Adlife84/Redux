import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./types"

// Counter reducer
export function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }

    return state;
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

// Theme reducer
export function themeReducer(state = initialThemeState, action = 'dark') {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, value: action.payload }
        case ENABLE_BUTTONS:
            return { ...state, disabled: false }
        case DISABLE_BUTTONS:
            return { ...state, disabled: true }

        default: return state
    }
    return state
}

// Combine all your reducers in one rootReducer (you can decomposite your logic in the different reducer)
export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})