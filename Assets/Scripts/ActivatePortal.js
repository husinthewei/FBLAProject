#pragma strict
static var OneDone : boolean;
static var TwoDone : boolean;
//OneDone = false;
//TwoDone = false;

var one = OneDone;
var two = TwoDone;
var Portal : GameObject;
var Called;
Portal = GameObject.Find("Portal");

function Start () {
if(OneDone == false || TwoDone == false){
Portal.SetActive(false);
}
Called = getCalled;
if(OneDone == true && TwoDone == true){
Debug.Log(OneDone + " " + TwoDone);
Portal.SetActive(true);
Called = false;
}
}

function Update () {
	one = OneDone;
	two = TwoDone;
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
public static function setOneDone(NewValue){
	OneDone = NewValue;
	Debug.Log(OneDone);
}
public static function setTwoDone(NewValue){
	TwoDone = NewValue;
	Debug.Log(TwoDone);
}
