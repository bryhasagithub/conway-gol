import React, { Component } from 'react';

class Box extends Component{
  constructor(props) {
    super(props)
    this.selectBox = this.selectBox.bind(this)
  }
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col);
  }
  render(){
    return(
      <div className={this.props.boxClass} id={this.props.boxId} onClick={this.selectBox}></div>
    );
  };
}

class Buttons extends Component{
  render(){
    let butArray = [];
    this.props.buttons.map((obj, i) => {
      butArray.push(<button onClick={obj.eventHandler} key={i}>{obj.name}</button>);
    });
    return(
      <div className="btn-container">
        {butArray}
      </div>
    );
  }
}
class Grid extends Component{
  render(){
    let rowArr = [], boxId, boxClass;
    try {
      for(let i = 0; i < this.props.rowNum; i++){
        for(let j = 0; j < this.props.colNum; j++){
          boxId = i + '_' + j;
          boxClass = this.props.gridArr[i][j] ? 'box alive' : 'box dead';
          rowArr.push(<Box boxClass={boxClass} key={boxId} boxId={boxId} row={i} col={j} selectBox={this.props.selectBox}/>);
        }
        
      }
      return(
        <div className="grid" style={{gridTemplateColumns: `repeat(${this.props.colNum}, 10px)`}}>
          {rowArr}
        </div>
      );
    } catch (grid_err) {
      console.log("loading error for generating grid rows/cols", grid_err)
      return <div className="grid"></div>
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.buttons = [
      {eventHandler: this.toggleActiveState, name: 'Play'},
      {eventHandler: this.randomizeEv, name: 'Randomize'},
      {eventHandler: this.clearEv, name: 'Clear'},
      {eventHandler: this.autoMaxGrid, name: 'Maximize Grid'}
    ];
    this.state = {
      rows: 30,
      cols: 30,
      user_rows: 30,
      user_cols: 30,
      speed: 100,
      isActive: false,
      gens: 0,
      gridArray: Array(30).fill().map(() => Array(30).fill(false)),
    };

  }

  selectBox = (row, col) => {
    let gridCopy = cloneArray(this.state.gridArray);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridArray: gridCopy
    });
  }
  autoMaxGrid = () => {
    const rows = Math.floor(window.innerWidth / 10);
    const cols = Math.floor(window.innerHeight / 10);
    this.setState({
      rows: rows,
      user_rows: rows,
      cols: cols,
      user_cols: cols,
    });
    this.clearEv();
    this.randomize();
  }

  pauseGame = () => {
    clearInterval(this.interval);
    this.buttons[0].name = "Play";
  }

  playGame = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.playFn, this.state.speed);
    this.buttons[0].name = "Pause";
  }
  
  toggleActiveState = () => {
    if (!this.state.isActive) {
      this.playGame();
    }
    else {
      this.pauseGame();
    }
    this.setState({
      isActive: !this.state.isActive
    });
  }

  randomizeEv = () => {
    this.randomize();
  }
  
  clearEv = () => {
    this.pauseGame();
    let init_board = Array(this.state.rows).fill().map(() => Array(this.state.cols).fill(false));
    this.setState({
      gens: 0,
      gridArray: init_board,
    });
  }

  setRows = (event) => {
    event.preventDefault()
    const row = Math.floor(event.target.value)
    if (row < 151) {
      this.setState({
        user_rows: row
      });
    }
  }

  setCols = (event) => {
    event.preventDefault()
    const col = Math.floor(event.target.value)
    if (col < 151){
      this.setState({
        user_cols: col
      });
    }
  }

  setSpeed = (event) => {
    event.preventDefault()
    if (event.target.value < 1001){
      this.setState({
        speed: event.target.value
      });
    }
  }
  
  playFn = () => {
    let init_board = this.state.gridArray.map((x) => [...x]);
    let neighborCount;
    for(let i = 0; i < this.state.rows; i++){
      for(let j = 0; j < this.state.cols; j++){
        neighborCount = 0;
        if(i > 0)
        // checks neighbors below 
          neighborCount += this.state.gridArray[i - 1].slice(j - 1, j + 2).filter(Boolean).length;
        if(i < this.state.rows - 1)
        // checks neighbors above
          neighborCount += this.state.gridArray[i + 1].slice(j - 1, j + 2).filter(Boolean).length;
        // checks neighbors above to the right
        if(this.state.gridArray[i][j + 1])
          neighborCount++;
        // checks neighbors above to the left
        if(this.state.gridArray[i][j - 1])
          neighborCount++;

        // dead from overcrowded or underpopulation
        if(this.state.gridArray[i][j] && (neighborCount < 2 || neighborCount > 3)) init_board[i][j] = false;
        // alive if living box 2 or 3 neighbors
        if(this.state.gridArray[i][j] && (neighborCount === 2 || neighborCount === 3)) init_board[i][j] = true;
        // alive if dead box has 3 living neighbors
        if(this.state.gridArray[i][j] === false && neighborCount === 3) init_board[i][j] = true;

      }
    }
    this.setState({
      gens: this.state.gens + 1,
      gridArray: init_board
    });
  }

  randomize = () => {
    let newGrid = Array(this.state.rows).fill().map(() => Array(this.state.cols).fill(false));
    
    for(let i = 0; i < this.state.rows; i++){
      for(let j = 0; j < this.state.cols; j++){
        // Randomly populates ~40% to cells being alive.
        if(Math.floor(Math.random() * 2.5) === 1){
          newGrid[i][j] = true;
        }
      }
    }
    this.setState({
      gridArray : newGrid
    })
  }

  generateGrid = () => {
    this.setState({
      rows: this.state.user_rows,
      cols: this.state.user_cols
    });
    this.clearEv();
    this.randomize();
  }

  componentDidMount(){
    this.clearEv();
    this.randomize();
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Game Of Life</h1>
          <Buttons buttons={this.buttons}/>
          <h3>Generations: {this.state.gens} </h3>
          <div className="row-ctn--center">
            <div className="row-ctn--left">
              <span>speed(ms):</span>
              <input type="text" value={this.state.speed} onChange={this.setSpeed} />
            </div>
            <div className="row-ctn--left">
              <span>rows:</span>
              <input type="text" value={this.state.user_rows} onChange={this.setRows} />
            </div>
            <div className="row-ctn--left">
              <span>cols:</span>
              <input type="text" value={this.state.user_cols} onChange={this.setCols} />
            </div>
          </div>
          <div className="btn-container">
            <button onClick={this.generateGrid}>Generate New Grid</button>
          </div>
        </div>
        <Grid gridArr={this.state.gridArray} rowNum={this.state.rows} colNum={this.state.cols} selectBox={this.selectBox}/>
      </div>
    );
  }
}


function cloneArray(array){
  return JSON.parse(JSON.stringify(array));
}

export default App;
