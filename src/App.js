import React from "react";
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from "./redux/rootReducer";
import { increment, decrement, async } from "./redux/actions";
import thunk from 'redux-thunk';

const counter = document.getElementById('counter')

const store = createStore(
  rootReducer,
  0,
  applyMiddleware(thunk)
)

window.store = store

function onAddHandler() {
  store.dispatch(increment())
}

function onRemoveHandler() {
  store.dispatch(decrement())
}

function onAsyncHandler() {
  store.dispatch(async())
}

store.subscribe(() => {
  const state = store.getState()
  console.log(state)
  counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' })

function App() {
  return (
    <>
      <div className="container">
        <h1>Redux Store - Practice</h1>
        <input type="submit" />
      </div>
      <br />
      <h3 id='counter'>123</h3>
      <div className="container">
        <input className="green" onClick={onAddHandler} type="submit" value="Add" />
        <input onClick={onRemoveHandler} type="submit" value="Remove" />
        <input onClick={onAsyncHandler} type="submit" value="Async" />
      </div>
    </>
  );
}

export default App;
