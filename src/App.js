import React, { useEffect } from "react";
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from "./redux/rootReducer";
import { increment, decrement, async, changeTheme } from "./redux/actions";
import thunk from 'redux-thunk';
import logger from "redux-logger";

const counter = document.getElementById('counter')

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

window.store = store

function App() {

  function onAddHandler() {
    store.dispatch(increment())
  }

  function onRemoveHandler() {
    store.dispatch(decrement())
  }

  function onAsyncHandler() {
    store.dispatch(async())
  }

  function onThemeChange() {
    const newTheme = store.getState().theme.value === 'light'
      ? 'dark'
      : 'light'
    console.log(newTheme)
    store.dispatch(changeTheme(newTheme))
  }

  store.subscribe(() => {
    const state = store.getState()
    console.log(state)
    counter.textContent = state.counter

    // let btns = document.getElementsByTagName('input')
    // console.log(btns)
    // btns.array.forEach(element => {
    //   element.disabled = state.theme.disabled
    // });
  })

  store.dispatch({ type: 'INIT_APPLICATION' })

  let theme = store.getState().theme.value

  // useEffect(() =>{
  //   console.log(store)
  // }, [store])

  return (
    <>
      <div className="container">
        <h1>Redux Store - Practice</h1>
        <input onClick={onThemeChange} type="submit" />
      </div>
      <br />
      <h4>{theme}</h4>
      <h3 id='counter'></h3>
      <div className="container">
        <input className="green" onClick={onAddHandler} type="submit" value="Add" />
        <input onClick={onRemoveHandler} type="submit" value="Remove" />
        <input onClick={onAsyncHandler} type="submit" value="Async" />
      </div>
    </>
  );
}

export default App;
