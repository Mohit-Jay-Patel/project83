
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var last_x,last_y;
var current_x,current_y;
var colour="blue";
var width_of_line=1;

var width=screen.width;
var height=screen.height;
var new_width=width-70;
var new_height=height-300;
 if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
 }

canvas.addEventListener("touchstart",touch_start);
function touch_start(e){
colour=document.getElementById("colour").value;
width_of_line=document.getElementById("width_of_line").value;
last_x=e.touches[0].clientX-canvas.offsetLeft;
last_y=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove", touch_move);
function touch_move(e){
 current_x=e.touches[0].clientX-canvas.offsetLeft;
 current_y=e.touches[0].clientY-canvas.offsetTop;
 
 
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();

 last_x=current_x;
 last_y=current_y;

}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}