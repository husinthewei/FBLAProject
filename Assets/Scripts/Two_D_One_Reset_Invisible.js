#pragma strict

 var controller = ChangeShape.controller;
 function OnTriggerEnter()
    {
        if (controller.radius != 0.0F)
            Application.LoadLevel("2D1");
    }