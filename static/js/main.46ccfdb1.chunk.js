(this["webpackJsonpconway-gol"]=this["webpackJsonpconway-gol"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),o=a.n(s),i=(a(14),a(8)),l=a(1),c=a(2),u=a(5),m=a(4),d=a(3),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).selectBox=function(){r.props.selectBox(r.props.row,r.props.col)},r.selectBox=r.selectBox.bind(Object(u.a)(r)),r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.boxClass,id:this.props.boxId,onClick:this.selectBox})}}]),a}(r.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[];return this.props.buttons.map((function(t,a){e.push(n.a.createElement("button",{onClick:t.eventHandler,key:a},t.name))})),n.a.createElement("div",{className:"btn-container"},e)}}]),a}(r.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t,a=[];try{for(var r=0;r<this.props.rowNum;r++)for(var s=0;s<this.props.colNum;s++)e=r+"_"+s,t=this.props.gridArr[r][s]?"box alive":"box dead",a.push(n.a.createElement(p,{boxClass:t,key:e,boxId:e,row:r,col:s,selectBox:this.props.selectBox}));return n.a.createElement("div",{className:"grid",style:{gridTemplateColumns:"repeat(".concat(this.props.colNum,", 10px)")}},a)}catch(o){return console.log("loading error for generating grid rows/cols",o),n.a.createElement("div",{className:"grid"})}}}]),a}(r.Component);var h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).selectBox=function(t,a){var r,n=(r=e.state.gridArray,JSON.parse(JSON.stringify(r)));n[t][a]=!n[t][a],e.setState({gridArray:n})},e.autoMaxGrid=function(){var t=Math.floor(window.innerWidth/10),a=Math.floor(window.innerHeight/10);e.setState({rows:t,user_rows:t,cols:a,user_cols:a}),e.clearEv(),e.randomize()},e.pauseGame=function(){clearInterval(e.interval),e.buttons[0].name="Play"},e.playGame=function(){clearInterval(e.interval),e.interval=setInterval(e.playFn,e.state.speed),e.buttons[0].name="Pause"},e.toggleActiveState=function(){e.state.isActive?e.pauseGame():e.playGame(),e.setState({isActive:!e.state.isActive})},e.randomizeEv=function(){e.randomize()},e.clearEv=function(){e.pauseGame();var t=Array(e.state.rows).fill().map((function(){return Array(e.state.cols).fill(!1)}));e.setState({gens:0,gridArray:t})},e.setRows=function(t){t.preventDefault();var a=Math.floor(t.target.value);a<151&&e.setState({user_rows:a})},e.setCols=function(t){t.preventDefault();var a=Math.floor(t.target.value);a<151&&e.setState({user_cols:a})},e.setSpeed=function(t){t.preventDefault(),t.target.value<1001&&e.setState({speed:t.target.value})},e.playFn=function(){for(var t,a=e.state.gridArray.map((function(e){return Object(i.a)(e)})),r=0;r<e.state.rows;r++)for(var n=0;n<e.state.cols;n++)t=0,r>0&&(t+=e.state.gridArray[r-1].slice(n-1,n+2).filter(Boolean).length),r<e.state.rows-1&&(t+=e.state.gridArray[r+1].slice(n-1,n+2).filter(Boolean).length),e.state.gridArray[r][n+1]&&t++,e.state.gridArray[r][n-1]&&t++,e.state.gridArray[r][n]&&(t<2||t>3)&&(a[r][n]=!1),!e.state.gridArray[r][n]||2!==t&&3!==t||(a[r][n]=!0),!1===e.state.gridArray[r][n]&&3===t&&(a[r][n]=!0);e.setState({gens:e.state.gens+1,gridArray:a})},e.randomize=function(){for(var t=Array(e.state.rows).fill().map((function(){return Array(e.state.cols).fill(!1)})),a=0;a<e.state.rows;a++)for(var r=0;r<e.state.cols;r++)1===Math.floor(2.5*Math.random())&&(t[a][r]=!0);e.setState({gridArray:t})},e.generateGrid=function(){e.setState({rows:e.state.user_rows,cols:e.state.user_cols}),e.clearEv(),e.randomize()},e.buttons=[{eventHandler:e.toggleActiveState,name:"Play"},{eventHandler:e.randomizeEv,name:"Randomize"},{eventHandler:e.clearEv,name:"Clear"},{eventHandler:e.autoMaxGrid,name:"Maximize Grid"}],e.state={rows:30,cols:30,user_rows:30,user_cols:30,speed:100,isActive:!1,gens:0,gridArray:Array(30).fill().map((function(){return Array(30).fill(!1)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.clearEv(),this.randomize()}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Game Of Life"),n.a.createElement(v,{buttons:this.buttons}),n.a.createElement("h3",null,"Generations: ",this.state.gens," "),n.a.createElement("div",{className:"row-ctn--center"},n.a.createElement("div",{className:"row-ctn--left"},n.a.createElement("span",null,"speed(ms):"),n.a.createElement("input",{type:"text",value:this.state.speed,onChange:this.setSpeed})),n.a.createElement("div",{className:"row-ctn--left"},n.a.createElement("span",null,"rows:"),n.a.createElement("input",{type:"text",value:this.state.user_rows,onChange:this.setRows})),n.a.createElement("div",{className:"row-ctn--left"},n.a.createElement("span",null,"cols:"),n.a.createElement("input",{type:"text",value:this.state.user_cols,onChange:this.setCols}))),n.a.createElement("div",{className:"btn-container"},n.a.createElement("button",{onClick:this.generateGrid},"Generate New Grid"))),n.a.createElement(f,{gridArr:this.state.gridArray,rowNum:this.state.rows,colNum:this.state.cols,selectBox:this.selectBox}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.46ccfdb1.chunk.js.map