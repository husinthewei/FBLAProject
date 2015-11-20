#pragma strict
var health = 100;
var x = 1320;
var CurrentQuestion = 0;

var factors = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var products = [0,0,0,0,0,0,0,0,0,0];

var answers = [0,0,0,0,0,0,0,0,0,0];

var one : Texture;
one = Resources.Load("Resources/1");

function Start(){
	CreateNumbers();
	assignTextures();
}
function assignTextures(){
	one = Resources.Load("Resources/1");
	//var go = new GameObject.CreatePrimitive(PrimitiveType.Plane);
	//var rend = go.GetComponent.<Renderer>();
	//rend.material.mainTexture = Resources.Load("glass") as Texture;
} 

function OnGUI () {
	var string = "";
	for(var i = 0; i < answers.length; i++){
		string += answers[i];
	}
	GUI.DrawTexture(Rect(10,10,20,30), one);
    GUI.Label (Rect (1000, 29, 100, 30), string);
    GUI.contentColor = Color.blue;
    //GUI.Rect(100, 100, 100, 100);
    //x-=1;
}

function Update(){
	OnGUI();
	if(Input.GetMouseButtonDown(0)){
		OnMouseDown();
	}
	
	for(var i = 0; i < answers.length; i++){
		answers[i] = parseInt(Random.value * 10);
	}
}

function OnMouseDown(){
	print('wassup');
}
function CreateNumbers(){
	for(var i = 0; i < factors.length; i++){
		factors[i] = parseInt(Random.value * 10);
	}
	for(var j = 0; j < products.length; j++){
		products[j] = factors[2*j] * factors[2*j+1];
		answers[j] = parseInt(Random.value * 10);
	}
}


