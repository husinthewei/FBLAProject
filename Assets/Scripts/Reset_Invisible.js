#pragma strict

var controller : CharacterController;
controller = GetComponent.<CharacterController>();
 function OnTriggerEnter()
    {
        if (controller.radius != 0.0F){
        	if(Application.loadedLevelName == "2D1");
            Application.LoadLevel("2D1");
            }
            else if(Application.loadedLevelName == "2D1_to_L"){
            Application.LoadLevel("2D1_to_L");
            }
            else if(Application.loadedLevelName == "2D2"){
            Application.LoadLevel("2D2");
            }
            }