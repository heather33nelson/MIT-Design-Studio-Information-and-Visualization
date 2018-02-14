var canvas6 = document.getElementById("plot6");

canvas6.width = 2 * document.getElementById("plot6").clientWidth;
canvas6.height = 2 * document.getElementById("plot6").clientHeight;

var ctx6 = canvas6.getContext("2d");

//ctx6.fillStyle = "#f4e2b3";
//ctx6.fillRect(0, 0, 828, 736);
//ctx.save();

function rotate() {

  //ctx6.clearRect(0, 0, 828, 1472);
	
  // Move registration point to the center of the canvas
  ctx6.translate(414, 736);
	
  // Rotate 1 degree
  ctx6.rotate(Math.PI / 180);
    
  // Move registration point back to the top left corner of canvas
  ctx6.translate(-414, -736);
	
  ctx6.fillStyle = "rgba(255, 0, 0, 0.01)";
  ctx6.fillRect(414/2, 414/2, 414, 736/2);
  ctx6.fillStyle = "rgba(0, 0, 0, 0.01)";
  ctx6.fillRect(414/2, 414*2, 414, 736/2);
    
    //COMBINES THEM NICELY OFF THE SCREEN
//  ctx6.fillStyle = "rgba(255, 255, 0, 0.01)";
//  ctx6.fillRect(414/2, 414/2, 414, 736/2);
//  ctx6.fillStyle = "rgba(255, 0, 0, 0.01)";
//  ctx6.fillRect(414/2, 414*2, 414, 736/2);
    
//MAKES TWO CIRCLES:
//  ctx6.fillStyle = "rgba(255, 255, 0, 0.01)";
//  ctx6.fillRect(414/2, 414/2, 414/2, 736/4);
//  ctx6.fillStyle = "rgba(255, 0, 0, 0.01)";
//  ctx6.fillRect(414/2, 414*2, 414/2, 736/4);
}

rotate();
//setTimeout(rotate, 1000);

setInterval(rotate, 33);