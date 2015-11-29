#pragma strict
public static var OneDone = false;
public static var TwoDone = false;
var Portal : GameObject;
var Called;
Portal = GameObject.Find("Portal");
function Start () {
Portal.SetActive(true);
Called = false;
}

function Update () {
if(OneDone == true && TwoDone == true){
Portal.SetActive(true);
}
}

function getCalled(){
Called = Initialize_Planets.Called;
}