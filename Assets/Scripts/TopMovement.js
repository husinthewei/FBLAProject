#pragma strict

private var ship_top_speed : float = 0.25;
var ship_speed : float = 0.0;
var resistive_value: float = 0.01;
var moving_forward = false;
var ship_speed_z : float = 0.0;




//Returning to rest when no button is pressed in the foward direction
function Resist(){
    if(!moving_forward){
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
    var right = transform.TransformDirection(Vector3.right);
    controller.Move(this.gameObject.transform.right * ship_speed_z);
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
	
    while(Input.GetKey("a")){
        ship_speed_z = -0.1;
    }
    while(Input.GetKey("d")){
        ship_speed_z = 0.1;
    }

}
