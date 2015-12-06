#pragma strict

var text = "Humans love to experiment. We have tested the physical laws of the universe to no end, always seeking truth. However, time has been a subject of much speculation and uncertainty. We set out to understand time, to find out its progression. Unfortunately, no one could foresee the consequences of  experimenting with the time continuum. We pried too far into the workings of time, and thus have caused a terrible distortion of time in our universe. Everything has been split into parallel dimensions, all with conflicting time and space. You must travel through these dimensions and set the laws of physics right once more. Enter the two planets in each level and complete their puzzles to set things right!";
var y : float = 600;
function Start(){
}
function Update(){
}
function OnGUI () {
	y -= 1;
	var WhiteStyle : GUIStyle;
	WhiteStyle = new GUIStyle(GUI.skin.label);
    WhiteStyle.fontSize =72;
	WhiteStyle.normal.textColor = Color.white;
	WhiteStyle.hover.textColor = Color.white;

	
	GUI.Label (Rect (220, y, 1000, 5000), text, WhiteStyle);
	Debug.Log(y);
	
	if(y <= -2100)
		Application.LoadLevel("Locomotion");
}