# Glide frontend engineering exercise

You'll be building a simple web page to allow visitors to play [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

Conway's Game of Life is a cellular automaton "game" which evolves over time from simple patterns and a simple set of rules. You will need to implement these rules and display the results to the user.
### Rules of game:
- Every cell interacts with it's 8 neighbours
  - neighbors: cells horizontally, vertically, or diagonally adjacent
- At each step in time (generation) the following transitions occur:
  - any live cell with fewer than 2 living neighbors dies, (as if caused by underpopulation)
    - if (living_neighbors < 2 ) this.cell = dead
  - any living cell with 2 or 3 living neighbors lives on to the next generation
    - if (living_neighbors == 2 || living_neighbors == 3 ) this.cell = alive
  - any live cell with more than 3 living neighbors dies (overcrowded)
    - if (living_neighbors > 3) this.cell = dead
  - any dead cell with exactly 3 live neighbours becomes a live cell (as if by reproduction)
    - if (this.cell.state == "dead" && living_neighbors == 3) this.cell = dead
## Tech stack

- Implement the web page with any HTML/CSS framework you like. (No canvas or WebGL)
- Use your preferred programming language. The logic must run on the frontend.
- Implement the rules for Game of Life yourself. Don't use a pre-built GoL "engine".

## Requirements

The web page should have:

- A stylish header above the game board.
- A "Play/Pause" button which starts and stops the simulation.
- The ability to click on a cell to toggle its live/dead status.
- A "Randomize" button which fills the board with random data with 40% of cells being alive.
- A "Clear Board" button.
- A way to change the game speed: minimum timestep 10ms, maximum 1000ms.
- The ability to change the size of the game board between 10 and 150 rows/columns.
- A button which auto-sizes the board to the window size.
- The game board should "wrap" so the cell to the left of the first column is the rightmost cell in the same row. Same applies vertically, i.e. the game world is a torus. What goes out to the right comes in at the left, and vice versa. What goes out at the bottom comes in at the top, and vice versa.
- Cells should animate transitions between live and dead. These animation speeds should be tied to the game speed, and disappear when the speed is too fast for them to be useful.

## Deliverables

Pretend you're building this as a prototype for review, to demonstrate feasibility and to show how it works internally. You expect that it will be assessed on the following criteria:

- Ease of use
- Accessibility
- Performance
- Visual appeal

Further they would expect you to let them know how to build/run it, and they'd expect some form of documentation to guide them through the interesting pieces of your code.
Whether that's in the form of comments, or a README file, they probably wouldn't care. The code wouldn't have to be super clean, but it should be comprehensible.  You can assume the colleague is a competent software engineer.

## Questions?

If you have any questions at all, please don't hesitate to email us at jason@glideapps.com.
README.md
Displaying README.md.