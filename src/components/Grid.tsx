import { useEffect } from "react";

export default function Grid() {
  let grid: any = [];

  //render the grid
  for (let x = 0; x < 20; x++) {
    grid[x] = [];
    for (let y = 0; y < 20; y++) {
      grid[x][y] = <Cell />;
    }
  }

  console.log(grid);

  //initialise the snake
  const initSnake = () => {
    grid[9][9] = <Cell type="snake-body" />;
  };
  initSnake();

  //initialise some food
  const food = () => {
    let x = Math.floor(Math.random() * 20);
    let y = Math.floor(Math.random() * 20);

    grid[x][y] = <Cell type="food" />;
  };

  food();

  return <div id="grid">{grid}</div>;
}

function Cell(props: any) {
  return <div className={`grid-item ` + props.type}></div>;
}
