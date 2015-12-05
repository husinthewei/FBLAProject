var bg : Texture;
var start : Texture;
var controls : Texture;
var quit : Texture;

function OnGUI()
{
    var windowRect = Rect(0, 0, 1366, 597);
    windowRect = GUI.Window (0, windowRect, DoMyWindow, "Anachronistic Odyssey");
}


function DoMyWindow(windowID)
{
	GUI.DrawTexture(Rect(0,0,1366,597),bg);
    if (GUI.Button(Rect(481, 262, 399, 90), start))
        Application.LoadLevel("Locomotion");

    if (GUI.Button(Rect(481, 352, 399, 90), controls))
    	Application.LoadLevel("Controls");
        
    if (GUI.Button (Rect(481,442,399,90), quit))
        Application.Quit();
}