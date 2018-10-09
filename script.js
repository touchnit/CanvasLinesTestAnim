// randomNumbers generate an Array of 4, each row filled with a random generated number
function randomNumbers(){
  let randomArray = []
  
  for (let i=0; i<4; i++){
      let random
          
            do {
              random = Math.random();
          } while ( random === 0 );
      
      randomArray.push(random)
  }
  return randomArray
}

// creating randomN at loading

let randomVertiN = randomNumbers(),
    randomHorizN = randomNumbers();


// function generating lines in the background
function backgroundHorizontalLines(){

    let hCtx,
        hRoundCanvas,
        hRoundRandom,
        xMaxCoordinate = window.innerWidth,
        yMaxCoordinate = window.innerHeight;
       
    hRoundCanvas = document.getElementById("canvas1")
    hRoundCanvas.width = window.innerWidth
    hRoundCanvas.height = window.innerHeight  
    hCtx = hRoundCanvas.getContext('2d')  
    hCtx.beginPath()

    
  // generate 2 Bezier Curved lines towards the top separately 
  for (let i=0 ; i<2; i++){
      let hRoundRandomTool1,
          hRoundRandomTool2,
          hRoundRandomTool3;
         
      hRoundRandom = randomHorizN[i]
      hRoundRandomTool1 = hRoundRandom * Math.random()
      hRoundRandomTool2 = hRoundRandom * Math.random()
      hRoundRandomTool3 = hRoundRandom * Math.random()  
         
      
    
    hCtx.beginPath()
    hCtx.lineWidth=3
    hCtx.setLineDash([10,7])
    hCtx.moveTo(0,yMaxCoordinate*hRoundRandomTool1)
    hCtx.bezierCurveTo( 1000 * hRoundRandomTool3,
                        yMaxCoordinate * hRoundRandomTool2,
                        xMaxCoordinate * hRoundRandomTool3,
                        yMaxCoordinate * hRoundRandomTool1,
                        xMaxCoordinate,
                       1000 * hRoundRandom)
    hCtx.stroke()
    
  } 
    // generate 2 Bezier Curved lines towards the top separately 


    for (let i=2 ; i<4; i++){
      let hRoundRandomTool1,
          hRoundRandomTool2,
          hRoundRandomTool3;
         
      hRoundRandom = randomHorizN[i]
      hRoundRandomTool1 = hRoundRandom * Math.random() * 10
      hRoundRandomTool2 = hRoundRandom * Math.random() * 10 
      hRoundRandomTool3 = hRoundRandom * Math.random() * 10
         
      
    
    hCtx.beginPath()
    hCtx.lineWidth=1
    hCtx.setLineDash([10,7])
    hCtx.moveTo(0,yMaxCoordinate *hRoundRandomTool1)
    hCtx.bezierCurveTo( 1000 * hRoundRandomTool3,
                        yMaxCoordinate * hRoundRandomTool2,
                        xMaxCoordinate * hRoundRandomTool3,
                        yMaxCoordinate * hRoundRandomTool1,
                        xMaxCoordinate,
                       1000 * hRoundRandom)
    hCtx.stroke()
    
  }

}

function backgroundVerticalLines(){

    let vCtx,
        vRoundCanvas,
        vRoundRandom,
        xMaxCoordinate = window.innerWidth,
        yMaxCoordinate = window.innerHeight;
       
    vRoundCanvas = document.getElementById("canvas2")
    vRoundCanvas.width = window.innerWidth
    vRoundCanvas.height = window.innerHeight  
    vCtx = vRoundCanvas.getContext('2d') 
    vCtx.beginPath()

    
    // generate 2 Bezier Curved lines towards the top separately 
    for (let i=0 ; i<2; i++){
      let vRoundRandomTool1,
          vRoundRandomTool2,
          vRoundRandomTool3;
         
      vRoundRandom = randomVertiN[i]
      vRoundRandomTool1 = vRoundRandom * Math.random() * 10
      vRoundRandomTool2 = vRoundRandom * Math.random() * 10 
      vRoundRandomTool3 = vRoundRandom * Math.random() * 10
         
      
    
    
    vCtx.lineWidth=1
    vCtx.setLineDash([11, 7])
    vCtx.moveTo(xMaxCoordinate * vRoundRandomTool1, 0)
    vCtx.bezierCurveTo(xMaxCoordinate * vRoundRandom,
                       yMaxCoordinate * vRoundRandomTool1,
                       xMaxCoordinate * vRoundRandom,
                       yMaxCoordinate * vRoundRandomTool2,
                       xMaxCoordinate * vRoundRandom,
                      yMaxCoordinate)
    vCtx.stroke()
    
  }
    
    // generate 2 Bezier Curved lines towards the top separately 
    for (let i=2 ; i<4; i++){
      let vRoundRandomTool1,
          vRoundRandomTool2,
          vRoundRandomTool3;
         
      vRoundRandom = randomVertiN[i]
      vRoundRandomTool1 = vRoundRandom * Math.random() * 10
      vRoundRandomTool2 = vRoundRandom * Math.random() * 10
      vRoundRandomTool3 = vRoundRandom * Math.random() * 10
         
      
    
    vCtx.beginPath()
    vCtx.lineWidth=2
    vCtx.setLineDash([10,7])
    vCtx.moveTo( xMaxCoordinate * vRoundRandom,0)
    vCtx.bezierCurveTo( xMaxCoordinate * vRoundRandomTool3,
                        yMaxCoordinate * vRoundRandom,
                        xMaxCoordinate * vRoundRandomTool2,
                        yMaxCoordinate * vRoundRandomTool1,
                        xMaxCoordinate,
                       yMaxCoordinate * vRoundRandomTool1)
    vCtx.stroke()
    
  }

}



console.log(randomHorizN);
console.log(randomVertiN);
backgroundHorizontalLines();
backgroundVerticalLines();