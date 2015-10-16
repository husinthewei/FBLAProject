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
   windowRect = new Rect(20, 20, 120, 120);
   if(isPause)
        GUI.Window(0, windowRect, DoMyWindow, "Pause Menu");
 }
 
 function DoMyWindow(windowID){
     if (GUI.Button(new Rect(10, 20, 100, 20), "Back to Main"))
         Application.LoadLevel("Start");
 	
 	if(GUI.Button(new Rect(10, 50, 100, 20), "Options"))
 		print("onOptions");
 	
 	if(GUI.Button(new Rect(10, 80, 100, 20), "Exit Game"))
 		Application.Quit();
 	
 }