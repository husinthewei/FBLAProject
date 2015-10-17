#pragma strict
var health = 100;
function OnGUI () {
    GUI.Label (Rect (1320, 29, 100, 30),  health.ToString());
    GUI.contentColor = Color.blue;
    //GUI.Rect(100, 100, 100, 100);
}

