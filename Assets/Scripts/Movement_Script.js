#pragma strict

private var ship_top_speed : float = 0.25;
var ship_speed : float = 0.0;
var resistive_value: float = 0.01;
var moving_forward = false;
var rotating_y = false;

var x_rotation : float = 0.0;
var y_rotation : float = 0.0;

var x_sensitivity : float = 5.0;
var y_sensitivity : float = 5.0;

var max_y_rotation : float = 90;
//Returning to forward direction when no buttons pressed
function Resist(){
    if(!moving_forward){
        ship_speed -= resistive_value;
        if(ship_speed < 0)
            ship_speed = 0;
    }   
    
    if(!rotating_y && y_rotation != 0){
    	if(y_rotation > 0){
    		y_rotation -= y_sensitivity * 1.5;
    		if(y_rotation < 0)
    			y_rotation = 0;
    	}
    	
    if(y_rotation < 0){
    		y_rotation += y_sensitivity * 1.5;
    		if(y_rotation > 0)
    			y_rotation = 0;
    	}
    }
}

function Update() 
{
    Resist();
    var controller : CharacterController = GetComponent(CharacterController);
	var forward = transform.TransformDirection(Vector3.forward);
	controller.Move(this.gameObject.transform.forward * ship_speed);
	//Speed Up
	if (Input.GetKey("w"))
	{
	    moving_forward = true;
		if (ship_speed < ship_top_speed)
		{
			ship_speed += 0.1;
			if (ship_speed > ship_top_speed)
			{
				ship_speed = ship_top_speed;
			}
		}
	}
	else{
	    moving_forward = false;
	}
	
	if(Input.GetKey("a")){
		x_rotation -= x_sensitivity; 
	}
	if(Input.GetKey("d")){
		x_rotation += x_sensitivity;
	}
	if(Input.GetKey("q")){
		rotating_y = true;
		y_rotation -= y_sensitivity;
		if(y_rotation < (-1)*max_y_rotation)
			y_rotation = (-1) * max_y_rotation;
		
	}
	else if(Input.GetKey("e")){
		rotating_y = true;
		y_rotation += y_sensitivity;
		if(y_rotation > max_y_rotation)
			y_rotation = max_y_rotation;
	}
	else
		rotating_y = false;
	
	transform.localEulerAngles = Vector3 (y_rotation, x_rotation, 0);
}