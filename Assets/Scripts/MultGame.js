#pragma strict
var health = 100;
var x = 1320;
var CurrentQuestion = 0;

var factors = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var products = [0,0,0,0,0,0,0,0,0,0];

var answers = [0,0,0,0,0,0,0,0,0,0];

var zero : Texture;
var one : Texture;
var two : Texture;
var three : Texture;
var four : Texture;
var five : Texture;
var six : Texture;
var seven : Texture;
var eight : Texture;
var nine : Texture;

var nums = [zero,one,two,three,four,five,six,seven,eight,nine];
var CurrentAnswer = "";


function Start(){
	CreateNumbers();
}


function OnGUI () {

	var e : Event = Event.current;
    if (Event.current.type == EventType.KeyUp && CurrentQuestion < 10){
    	if(Event.current.keyCode == KeyCode.Alpha0 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 0;
    	if(Event.current.keyCode == KeyCode.Alpha1 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 1;
    	if(Event.current.keyCode == KeyCode.Alpha2 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 2;
    	if(Event.current.keyCode == KeyCode.Alpha3 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 3;    		
    	if(Event.current.keyCode == KeyCode.Alpha4 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 4;
    	if(Event.current.keyCode == KeyCode.Alpha5 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 5;
    	if(Event.current.keyCode == KeyCode.Alpha6 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 6;
    	if(Event.current.keyCode == KeyCode.Alpha7 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 7;    	
    	if(Event.current.keyCode == KeyCode.Alpha8 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 8;    
    	if(Event.current.keyCode == KeyCode.Alpha9 && (CurrentAnswer).Length <2)
    		CurrentAnswer = CurrentAnswer + 9;
    		
    	if(Event.current.keyCode == KeyCode.Backspace && (CurrentAnswer).Length >0)
    		CurrentAnswer = CurrentAnswer.Substring(0, CurrentAnswer.Length - 1);
    	
    	if(Event.current.keyCode == KeyCode.Return && CurrentQuestion < 10){
    			//Debug.Log("IT IS");
    			if(CurrentAnswer.Length == 0)
    				answers[CurrentQuestion] = 0;
    			if(CurrentAnswer.Length == 1)
    				answers[CurrentQuestion] = parseInt(CurrentAnswer.Substring(0,1));
    			if(CurrentAnswer.Length == 2)
    				answers[CurrentQuestion] = 10 * parseInt(CurrentAnswer.Substring(0,1)) + parseInt(CurrentAnswer.Substring(1,1));
    				
    			CurrentQuestion+=1;   		    					    	
    			CurrentAnswer = "";
    		}	    		    		
    }
        //Debug.Log("Detected key code: " + e.keyCode);


	if(CurrentQuestion >= 10){
		var correct = CheckAnswers();
		if(correct){
			Debug.Log("You Answered All Correctly");
			Application.LoadLevel("Locomotion");	
		}
		else{
			reset();
		}
	}
	
	
	var string = "";
	for(var i = 0; i < answers.length; i++){
		if(("" + answers[i]).Length == 1)
			GUI.DrawTexture(Rect (495 + 50*i, 260, 20, 30),nums[answers[i]]);
		if(("" + answers[i]).Length == 2){
			GUI.DrawTexture(Rect (495 + 50*i, 260, 20, 30),nums[parseInt((""+answers[i]).Substring(0,1))]);
			GUI.DrawTexture(Rect (495 + 50*i + 18, 260, 20, 30),nums[parseInt((""+answers[i]).Substring(1,1))]);
			}
	}
	
	if(CurrentQuestion < 10){
		GUI.DrawTexture(new Rect(395, 360, 60, 90), nums[factors[2 * CurrentQuestion]], ScaleMode.ScaleToFit, true);
		GUI.DrawTexture(new Rect(500, 360, 60, 90), nums[factors[2 * CurrentQuestion + 1]], ScaleMode.ScaleToFit, true);
	}
	
	Debug.Log(CurrentAnswer);
	if(CurrentAnswer.Length == 1){
		GUI.DrawTexture(new Rect(700, 360, 60, 90), nums[parseInt(CurrentAnswer.Substring(0,1))], ScaleMode.ScaleToFit, true);
		}
	if(CurrentAnswer.Length == 2){
		GUI.DrawTexture(new Rect(700, 360, 60, 90), nums[parseInt(CurrentAnswer.Substring(0,1))], ScaleMode.ScaleToFit, true);
		GUI.DrawTexture(new Rect(740, 360, 60, 90), nums[parseInt(CurrentAnswer.Substring(1,1))], ScaleMode.ScaleToFit, true);
		}
		
	//GUI.DrawTexture(Rect (495, 500, 60, 90),nums[factors[2 * CurrentQuestion+1]]);
	
	//GUI.DrawTexture(Rect (360, 240, 20, 30),two);
	//GUI.Button (Rect (1000, 29, 100, 30),(one),GUIStyle.none);
    //GUI.Label (Rect (1000, 29, 100, 30), string);
    GUI.contentColor = Color.blue;
    //GUI.Rect(100, 100, 100, 100);
    //x-=1;
}

function CheckAnswers(){
	var count = 0;
	for(var i =0 ; i < answers.Length; i++){
		if(answers[i] == products[i]){
			count++;
		}
	} 
	
	if(count == 10)
		return true;
	else
		return false;
	
}

function reset(){
	CurrentQuestion = 0;
	answers = [0,0,0,0,0,0,0,0,0,0];
	CreateNumbers();
}

function Update(){
	for(var i = CurrentQuestion; i < answers.length; i++){
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


