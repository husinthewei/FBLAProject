#pragma strict
public static var OneDone = false;
public static var TwoDone = false;
var Portal : GameObject;
Portal = GameObject.Find("Portal");
function Start () {
Portal.SetActive(true);
}

function Update () {
if(OneDone == true && TwoDone == true){
Portal.SetActive(true);
}
}