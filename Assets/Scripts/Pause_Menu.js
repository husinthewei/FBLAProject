var isPause = false;
//public var 
 var bg : Texture;
 var res : Texture;
 var main : Texture;
 var ex : Texture;
 
 function Start(){
 	Screen.SetResolution(1366,597,false);
 }
 
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
   if(isPause){
		GUI.DrawTexture(Rect (0, 0, 1366, 597),bg);
    if (GUI.Button(Rect(481, 262, 399, 90), res)){
        isPause = false;    
    	Time.timeScale = 1;
    }

    if (GUI.Button(Rect(481, 352, 399, 90), main)){
    	Application.LoadLevel("Start");
    	Time.timeScale = 1;
    	}
        
    if (GUI.Button (Rect(481,442,399,90), ex)){
        Application.Quit();
        Time.timeScale=1;
        }
   }

 }
 