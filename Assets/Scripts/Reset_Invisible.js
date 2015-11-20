#pragma strict

 var controller = ChangeShape.controller;
 function OnTriggerEnter()
    {
        if (controller.radius != 0.0F){
        	if(Application.loadedLevelName == "2D1");
            Application.LoadLevel("2D1");
            }
            else if(Application.loadedLevelName == "2D1_to_L"){
            Application.LoadLevel("2D1_to_L");
            }
            }