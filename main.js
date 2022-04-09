Canvas=document.getElementById("canvas_1");
Context=Canvas.getContext("2d");

color="red";
width_line=3;

var last_pos_x;
var last_pos_y;

var mouse_event="";

Canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){

    mouse_event="mouseDown";

    last_pos_x = e.clientX - Canvas.offsetLeft;
    last_pos_y = e.clientY - Canvas.offsetTop;

    color = document.getElementById("color").value;
    
    width_line = document.getElementById("width_of_line").value;
    
}

Canvas.addEventListener("mouseup",my_mouse_up);

function my_mouse_up(e){
    
mouse_event="mouseUp";

}

Canvas.addEventListener("mouseleave",my_mouse_leave);

function my_mouse_leave(e){
    
mouse_event="mouseLeave";

}


Canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){

    current_pos_x = e.clientX - Canvas.offsetLeft;
    current_pos_y = e.clientY - Canvas.offsetTop;
    
    if(mouse_event == "mouseDown"){
        
        Context.beginPath();
        Context.strokeStyle="blue";
        Context.lineWidth=5;
        Context.arc(current_pos_x,current_pos_y,50,0,2*Math.PI);
        Context.stroke();

        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;


        
    }

}

function clearArea(){

    Context.clearRect(0,0,Canvas.width,Canvas.height);

}