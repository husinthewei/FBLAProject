#pragma strict

function Start () {

}

function Update () {

}


function OnGUI () {

	var GreenStyle : GUIStyle;
		GreenStyle = new GUIStyle(GUI.skin.label);
    	GreenStyle.fontSize = 12;
		GreenStyle.normal.textColor = Color.green;
		GreenStyle.hover.textColor = Color.green;
	var BigGreen : GUIStyle;
		BigGreen = new GUIStyle(GUI.skin.label);
    	BigGreen.fontSize = 24;
		BigGreen.normal.textColor = Color.white;
		BigGreen.hover.textColor = Color.white;		
	GUI.Label (Rect (1190, 45, 300, 300), "Health: " + parseInt(HealthBar.health) + "/100", GreenStyle);	
	GUI.Label (Rect (636, 7, 300, 300), "Score: " + parseInt(Score.score), BigGreen);	
	GUI.Label (Rect (8, 50, 300, 300), "Lives: " + parseInt(Score.lives), GreenStyle);	
	GUI.Label (Rect (8, 65, 300, 300), "Level: " + parseInt(Initialize_Planets.Dim - 1), GreenStyle);	
}
