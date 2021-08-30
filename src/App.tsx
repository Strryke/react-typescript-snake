import React from "react";
import "./App.css";
import Grid from "./components/Grid";

//render grid - done
//initial snake state - done
//show food
//make snake move
//make snake eat food
//game over

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="snake-container">
        <Grid />
      </div>
    </div>
  );
}

export default App;
