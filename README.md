# Conway's Game of Life

Conway's Game of Life is a cellular automaton "game" which evolves over time from simple patterns and a simple set of rules. You will need to implement these rules and display the results to the user.

### Live Demo here:  
You can check out the working app [here](https://bryhasagithub.github.io/conway-gol/)

## Rules :
- Every cell interacts with it's 8 neighbours
  - neighbors: cells horizontally, vertically, or diagonally adjacent
- At each step in time (generation) the following transitions occur:
  - any live cell with fewer than 2 living neighbors dies, (as if caused by underpopulation)
    - if (living_neighbors < 2 ) this.cell = dead
  - any living cell with 2 or 3 living neighbors lives on to the next generation
    - if (living_neighbors == 2 || living_neighbors == 3 ) this.cell = alive
  - any live cell with more than 3 living neighbors dies (overcrowded)
    - if (living_neighbors > 3) this.cell = dead
  - any dead cell with exactly 3 live neighbours becomes a live cell (as if by reproduction)****
    - if (this.cell.state == "dead" && living_neighbors == 3) this.cell = alive

## Tech Stack
- React webapp created with `create-react-app` 
- logic/rules written with Javascript

## Styling
- Color palate:
  - #2b2b2b
  - #3498db
  - #FF9666
  - #FFE184
  - #F5E9BE
