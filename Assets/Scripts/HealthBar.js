#pragma strict
static var health : float = 100;
var length : float;

var bar : Texture;
var outline : Texture;
function Start () {

}

function Update () {
	if(health <= 0){
		Score.lives += -1;
		health = 100;
		if(Initialize_Planets.Dim %2 ==  1){
			Application.LoadLevel("Dimension2");
			}
			else{
			Application.LoadLevel("Locomotion");
			}
		}
}

function OnGUI () {
	//green font
	var GreenStyle : GUIStyle;
	GreenStyle = new GUIStyle(GUI.skin.label);
    GreenStyle.fontSize = 12;
	GreenStyle.normal.textColor = Color.green;
	GreenStyle.hover.textColor = Color.green;

	
	//health-=0.1;
	length = parseInt((health/100) * 183);
	//length = 1;
	GUI.DrawTexture(Rect (1170, -5, 200, 65),outline,ScaleMode.ScaleToFit, true);
	GUI.DrawTexture(Rect(1178, 7, length, 25), bar, ScaleMode.StretchToFill, true);
	
	//GUI.Label (Rect (1170, 45, 300, 300), "Health: " + parseInt(health) + "/100", GreenStyle);	
}