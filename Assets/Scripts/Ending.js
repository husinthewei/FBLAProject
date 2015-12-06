#pragma strict

var text = "Congratulations! Through your intelligence, you have successfully restored the laws of nature and reconciled the time continuum! You have brought stability back to the universe and brought together the fractured dimensions back into one. Everyone rejoices now that the universe is no longer in danger of splintering apart.";
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
	
	var SmallStyle : GUIStyle;
	SmallStyle = new GUIStyle(GUI.skin.label);
    SmallStyle.fontSize = 15;
	SmallStyle.normal.textColor = Color.white;
	SmallStyle.hover.textColor = Color.white;
	
	GUI.Label (Rect (5, 10, 1000 , 500), "Final Score:" + Score.score, SmallStyle);	
	if (GUI.Button(new Rect(5, 40, 120, 60), "Return to Main"))
		Application.LoadLevel("Start");
	if (GUI.Button(new Rect(5, 110, 120, 60), "Exit Game"))
		Application.Quit();		
		
					

	Debug.Log(y);
	
	GUI.Label (Rect (220, y, 1000, 5000), text, WhiteStyle);
	Debug.Log(y);

	if(y <= -2100)
		Application.LoadLevel("Start");
}