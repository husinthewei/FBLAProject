var bg : Texture;
var ret : Texture;


function OnGUI()
{
    var windowRect = Rect(0, 0, 1366, 597);
    windowRect = GUI.Window (0, windowRect, DoMyWindow, "Anachronistic Odyssey");
}


function DoMyWindow(windowID)
{
	GUI.DrawTexture(Rect(0,0,1366,597),bg);
    if (GUI.Button(Rect(486, 493, 399, 90), ret))
        Application.LoadLevel("Start");


}