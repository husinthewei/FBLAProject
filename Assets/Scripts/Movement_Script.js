#pragma strict

private var ship_top_speed : float = 0.25;
var ship_speed : float = 0.0;
function Update() 
{
    var controller : CharacterController = GetComponent(CharacterController);
	var forward = transform.TransformDirection(Vector3.forward);
	controller.Move(this.gameObject.transform.forward * ship_speed);
	//Speed Up
	if (Input.GetKey("w"))
	{
		if (ship_speed < ship_top_speed)
		{
			ship_speed += 0.1;
			if (ship_speed > ship_top_speed)
			{
				ship_speed = ship_top_speed;
			}
		}
	}
	//Slow Down
	if (Input.GetKey("s"))
	{
		if (ship_speed > 0.0)
		{
			ship_speed -= 0.2;
			if (ship_speed < 0.0)
			{
				ship_speed = 0;
			}
		}
	}
}