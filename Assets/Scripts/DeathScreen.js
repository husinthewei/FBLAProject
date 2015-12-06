#pragma strict
var bg : Texture;
function Start () {
}

function Update () {
}

function OnGUI(){
	var BigGreen : GUIStyle;
		BigGreen = new GUIStyle(GUI.skin.label);
    	BigGreen.fontSize = 24;
		BigGreen.normal.textColor = Color.white;
		BigGreen.hover.textColor = Color.white;	

	GUI.DrawTexture(Rect(0,0,1366,597),bg);
	GUI.Label (Rect (5, 20, 500, 500), "Final Score: " + parseInt(Score.score), BigGreen);	
	if (GUI.Button(new Rect(5, 60, 120, 60), "Return to Main"))
		Application.LoadLevel("Start");
	if (GUI.Button(new Rect(5, 130, 120, 60), "Exit Game"))
		Application.Quit();		
}