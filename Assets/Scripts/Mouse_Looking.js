#pragma strict

var x_rotation : float = 0.0;
var y_rotation : float = 0.0;

var x_sensitivty : float = 5.0;
var y_sensitivty : float = 5.0;

function Update () 
{
	x_rotation += Input.GetAxis("Mouse X") * x_sensitivty;
	y_rotation -= Input.GetAxis("Mouse Y") * y_sensitivty;
	
	transform.localEulerAngles = Vector3 (y_rotation, x_rotation, 0);
}


