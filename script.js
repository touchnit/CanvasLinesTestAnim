// randomNumbers generate an Array of 4, each row filled with a random generated number
function randomNumbers(){
  let randomArray = [];
  
  for (let i=0; i<4; i++){
      let random,
          do{
              random = Math.random()}
          while( random === 0 )
    
    randomArray.push(random)
  return randomArray
}

// creating randomN at loading

let randomVertiN = randomNumbers(),
randomHorizN = randomNumbers();


// function generating lines in the background
function backgroundHorizontalLines(){

 
    
  // generate each Canvas separately 
  for (let i=0 ; i<4; i++){
    let hCanvas = [],
        hCtx = [];
    let hRoundRandom = randomHorizN[i],
        hRoundCanvas,
        y = i + 1,
        hLine = 'hline' + y ;
    
    hRoundCanvas = hCanvas[y]
       
    hRoundCanvas = document.getElementById(hLine)
    hRoundCanvas.width = window.innerWidth
    hRoundCanvas.height = window.innerHeight  
    hCtx[y] = hRoundCanvas.getContext('2d')  
    hCtx[y].beginPath()
    hCtx[y].lineWidth=2
    hCtx[y].setLineDash([10,7])
    hCtx[y].moveTo(0*hRoundRandom,1000000*hRoundRandom)
    hCtx[y].bezierCurveTo(0,100*hRoundRandom,
                        200*hRoundRandom,100*hRoundRandom,
                        400*hRoundRandom,100);
    hCtx[y].stroke();
    
  }

}
/*
function backgroundVerticalLines(){
let vCanvas = [],
    vCtx = [];
  
  for (let i=0; i<4; i++){
    let vRoundRandom = randomVertiN[i],
        vy = i + 1,
        vRoundCanvas,
        vLine = 'vline' + vy ;
    
    vRoundCanvas = vCanvas[vy]
       
    vRoundCanvas = document.getElementById(vLine)
    vRoundCanvas.width = window.innerWidth
    vRoundCanvas.height = window.innerHeight
    vCtx[vy] = vRoundCanvas.getContext('2d')
    vCtx[vy].beginPath();
    vCtx[vy].moveTo(100,100);
    vCtx[vy].bezierCurveTo(20*vRoundRandom,100*vRoundRandom,
                        200*vRoundRandom,100*vRoundRandom,
                        200*vRoundRandom,20);
    vCtx[vy].stroke();
    
  }

}*/


console.log(randomHorizN);
/*console.log(randomVertiN);*/
backgroundHorizontalLines()
/*backgroundVerticalLines()*/