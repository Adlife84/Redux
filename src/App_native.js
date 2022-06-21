import React from "react";

const counter = document.getElementById('counter')


let state = 1;

function render() {
  console.log('Rendered')
  counter.textContent = state.toString()
}

function onAddHandler() {
  console.log('Added', state)
  state++
  render()
}

function onRemoveHandler() {
  console.log('Removed', state)
  state--
  render()
}

function onAsyncHandler() {
  setTimeout(() => {
    console.log('Async', state)
    state++
    render()
  }, 2000)
}

// render()

function App() {
  return (
    <>
      <div className="container">
        <h1>Redux Store - Practice</h1>
        <input type="submit" />
      </div>
      <br/>
      <h3 id='counter'>{state}</h3>
      <div className="container">
      <input onClick={onAddHandler} type="submit" value="Add" />
      <input onClick={onRemoveHandler} type="submit" value="Remove"/>
      <input onClick={onAsyncHandler} type="submit" value="Async"/>
      </div>

    </>


  );
}

export default App;
