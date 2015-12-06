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
	var RedStyle : GUIStyle;
		RedStyle = new GUIStyle(GUI.skin.label);
    	RedStyle.fontSize = 12;
		RedStyle.normal.textColor = Color.red;
		RedStyle.hover.textColor = Color.red;			
	GUI.Label (Rect (1190, 45, 300, 300), "Health: " + parseInt(HealthBar.health) + "/100", GreenStyle);	
	GUI.Label (Rect (636, 7, 300, 300), "Score: " + parseInt(Score.score), BigGreen);	
	GUI.Label (Rect (8, 50, 300, 300), "Lives: " + parseInt(Score.lives), GreenStyle);	
	GUI.Label (Rect (8, 65, 300, 300), "Level: " + parseInt(Initialize_Planets.Dim - 1), GreenStyle);	
	
	if(Application.loadedLevelName == "2D3_to_next" || Application.loadedLevelName == "2D1"){
		GUI.Label (Rect (20, 480, 500, 500), "Navigate through the temporal disturbance and reach the portal on the other side!", RedStyle);
		GUI.Label (Rect (20, 495, 500, 500), "F - vertical rectangle", RedStyle);
		GUI.Label (Rect (20, 510, 500, 500), "G - horizontal retangle", RedStyle);
		GUI.Label (Rect (20, 525, 500, 500), "H - circle", RedStyle);		
		}
}
