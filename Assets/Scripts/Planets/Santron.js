#pragma strict
function Start () {
}
function OnTriggerEnter() {
	print('hi');
	Application.LoadLevel('MultiplicationGame');
}