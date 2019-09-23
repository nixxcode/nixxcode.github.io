(window.webpackJsonpconnect4react=window.webpackJsonpconnect4react||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),o=a.n(c),l=(a(13),a(3)),i=a(4),s=a(6),u=a(5),m=a(7);var d=function(){return n.a.createElement("header",{className:"justify-center"},n.a.createElement("div",{className:"width-limit"},n.a.createElement("h1",null,"Connect 4 React")))};var f=function(e){var t="";switch(e.value){case 0:t="white";break;case 1:t="red";break;case 2:t="yellow";break;default:t="white"}return n.a.createElement("td",{onClick:function(){return e.onCellClick(e.colIndex)}},n.a.createElement("div",{className:"cell",row:e.rowIndex,col:e.colIndex},n.a.createElement("div",{className:"circle ".concat(t)})))};var v=function(e){var t=e.row.map((function(t,a){return n.a.createElement(f,{key:a,rowIndex:e.rowIndex,colIndex:a,value:t,onCellClick:e.onCellClick})}));return n.a.createElement("tr",null,t)};var h=function(e){var t=e.gameState.board.map((function(t,a){return n.a.createElement(v,{key:a,rowIndex:a,row:t,onCellClick:e.onCellClick})}));return n.a.createElement("div",{className:"game-board"},n.a.createElement("table",null,n.a.createElement("thead",null),n.a.createElement("tbody",null,t)))};var b=function(e){return n.a.createElement("main",{className:"justify-center"},n.a.createElement("div",{className:"width-limit"},n.a.createElement("div",{class:"info-area"},n.a.createElement("button",{type:"button",onClick:function(){return e.onNewGame()}},"New Game"),n.a.createElement("h1",null,e.gameState.message)),n.a.createElement(h,{gameState:e.gameState,onCellClick:e.onCellClick})))};var w=function(){return n.a.createElement("footer",{className:"justify-center"},n.a.createElement("div",{className:"width-limit"},n.a.createElement("span",null,"Connect 4 React 2019 \xa9 Dominik Petrovic (",n.a.createElement("a",{href:"https://github.com/nixxcode/connect4react"},"view code on Github"),"), CSS/visuals borrowed from ",n.a.createElement("a",{href:"https://codepen.io/jeffleu/pen/KgbZwj"},"Jeff Leu")," under the MIT license")))},E=function(e){function t(){var e;Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).newGame=function(){var t=e.initBoard();e.setState({currentPlayer:1,board:t,gameOver:!1,message:"RED turn"})},e.initBoard=function(){for(var e=[],t=0;t<6;t++){for(var a=[],r=0;r<7;r++)a.push(0);e.push(a)}return e},e.handleCellClick=function(t){if(!e.state.gameOver){for(var a=5;a>-1&&!(e.state.board[a][t]<=0);)--a;if(!(a<=-1)){var r=e.state.currentPlayer,n=e.state.board;n[a][t]=r;var c=e.isVictory(r),o=e.isDraw();e.setState({board:n,gameOver:!!c||o,currentPlayer:1===r?2:1,message:c?1===r?"RED Wins!":"YELLOW Wins!":o?"DRAW!":1===r?"YELLOW turn":"RED turn"})}}},e.isVictory=function(t){var a=e.checkHorizontal(t),r=e.checkVertical(t),n=e.checkDiagonalRight(t),c=e.checkDiagonalLeft(t);return!!(a||r||n||c)},e.isDraw=function(){for(var t=0;t<6;t++)for(var a=0;a<7;a++)if(e.state.board[t][a]<=0)return!1;return!0},e.checkHorizontal=function(t){for(var a=0;a<6;a++)for(var r=0;r<4;r++)if(e.state.board[a][r]===t&&e.state.board[a][r+1]===t&&e.state.board[a][r+2]===t&&e.state.board[a][r+3]===t)return!0;return!1},e.checkVertical=function(t){for(var a=0;a<7;a++)for(var r=0;r<3;r++)if(e.state.board[r][a]===t&&e.state.board[r+1][a]===t&&e.state.board[r+2][a]===t&&e.state.board[r+3][a]===t)return!0;return!1},e.checkDiagonalRight=function(t){for(var a=0;a<3;a++)for(var r=0;r<4;r++)if(e.state.board[a][r]===t&&e.state.board[a+1][r+1]===t&&e.state.board[a+2][r+2]===t&&e.state.board[a+3][r+3]===t)return!0;return!1},e.checkDiagonalLeft=function(t){for(var a=0;a<3;a++)for(var r=6;r>2;r--)if(e.state.board[a][r]===t&&e.state.board[a+1][r-1]===t&&e.state.board[a+2][r-2]===t&&e.state.board[a+3][r-3]===t)return!0;return!1};var a=e.initBoard();return e.state={currentPlayer:1,board:a,gameOver:!1,message:"RED turn"},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement(b,{gameState:this.state,onNewGame:this.newGame,onCellClick:this.handleCellClick}),n.a.createElement(w,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e37cb3ea.chunk.js.map