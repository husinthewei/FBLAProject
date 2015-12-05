#pragma strict
static var health : float;

health = 100;

function Start () {

}

function Update () {
	if(health < 0)
		health = 0;
}