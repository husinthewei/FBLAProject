#pragma strict

private var ship_top_speed : float = 0.25;
var ship_speed : float = 0.0;
var resistive_value: float = 0.01;
var MovingForward = false;

//Returning to forward direction when no buttons pressed
function Resist(){
    if(!MovingForward){
        ship_speed -= resistive_value;
        if(ship_speed < 0)
            ship_speed = 0;
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
	    MovingForward = true;
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
	    MovingForward = false;
	}
}