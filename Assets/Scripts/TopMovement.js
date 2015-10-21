#pragma strict

var ship_speed : float = 0.0;
var moving_forward = false;
var ship_speed_z : float = 0.0;

function Update() 
{
    var controller : CharacterController = GetComponent(CharacterController);
    var forward = transform.TransformDirection(Vector3.forward);
    controller.Move(this.gameObject.transform.forward * ship_speed);
    var right = transform.TransformDirection(Vector3.right);
    controller.Move(this.gameObject.transform.right * ship_speed_z);
    //Speed Up
    if (Input.GetKey("w"))
    {
        moving_forward = true;
            ship_speed = 0.1;
    }
    if (Input.GetKey("s"))
    {
        ship_speed = -0.1;
    }
    if(!Input.GetKey("w") && !Input.GetKey("s")){
        moving_forward = false;
        ship_speed = 0.0;
    }
	
    if(Input.GetKey("a")){
        ship_speed_z = -0.1;
    }
    if(Input.GetKey("d")){
        ship_speed_z = 0.1;
    }
    if(!Input.GetKey("a") && !Input.GetKey("d")){
        ship_speed_z = 0.0;
    }

}
