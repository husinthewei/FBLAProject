
function OnGUI()
{
    var windowRect = Rect(20, 20, 120, 120);
    windowRect = GUI.Window (0, windowRect, DoMyWindow, "Toast Simulator");
}


function DoMyWindow(windowID)
{
    if (GUI.Button(Rect(10, 20, 100, 20), "Start Game"))
        Application.LoadLevel("Locomotion");

    if (GUI.Button(Rect(10, 50, 100, 20), "Controls"));
        
    if (GUI.Button (Rect(10,80,100,20), "Quit"))
        Application.Quit();
}