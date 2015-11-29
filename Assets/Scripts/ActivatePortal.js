#pragma strict
static var OneDone = false;
static var TwoDone = false;
var Portal : GameObject;
var Called;
Portal = GameObject.Find("Portal");
function Start () {
Portal.SetActive(false);
Called = getCalled;
}

function Update () {
if(OneDone == true && TwoDone == true){
Portal.SetActive(true);
Called = false;
}
}

function getCalled(){
Called = Initialize_Planets.Called;
}

public static function getOneDone(){
return OneDone;
}

public static function getTwoDone(){
return TwoDone;
}