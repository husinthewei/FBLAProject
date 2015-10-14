var isPause = false;
//public var 
 
 
 function Update () {
  if( Input.GetKeyDown(KeyCode.Escape))
    {
       //createWindow();
       isPause = !isPause;
       if(isPause)
          Time.timeScale = 0;
       else
          Time.timeScale = 1;
    }
 }
 
 function createWindow(){
 	//int width = 
 }
 
 function OnGUI()
 {
   windowRect = new Rect(20, 20, 120, 100);
   if(isPause)
        GUI.Window(0, windowRect, DoMyWindow, "Pause Menu");
 }
 
 function DoMyWindow(windowID){
 	if(GUI.Button(new Rect(10, 20, 100, 20), "Back to Main"))
 		print("Got a click");
 	
 	if(GUI.Button(new Rect(10, 40, 100, 20), "Options"))
 		print("onOptions");
 	
 	if(GUI.Button(new Rect(10, 60, 100, 20), "Exit Game"))
 		Application.Quit();
 	
 }