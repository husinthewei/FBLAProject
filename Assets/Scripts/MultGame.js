#pragma strict
var health = 100;
var x = 1320;
private var CurrentQuestion = 0;
private var time : float;
private var seconds: float;
private var TimeRemaining : float;
TimeRemaining = 60;
//randomized factors and the products of them
private var factors = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
private var products = [0,0,0,0,0,0,0,0,0,0];

//array of all of the inputted answers. Initially constantly randomized for visual effect.
private var answers = [0,0,0,0,0,0,0,0,0,0];

//All the texture images
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
var check: Texture;
var wrong: Texture;

//array of the texture images
var nums = [zero,one,two,three,four,five,six,seven,eight,nine];

//The current inputted answers
var CurrentAnswer = "";
//for scaling of GUI components
//var native_width : float = 1920;
//var native_height : float = 1080;

function Start(){
	//Screen.SetResolution( 1366, 597, false );
	reset();
	CreateNumbers();
}


function OnGUI () {

	Debug.Log(Screen.width + " " + Screen.height);
	//var rx : float = Screen.width / native_width;
    //var ry : float = Screen.height / native_height;
    //GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (rx, ry, 1));
	//exit button
     if (GUI.Button(new Rect(10, 20, 100, 25), "Exit Puzzle")) {
     
         Application.LoadLevel("Locomotion");	
     }
     
    //Checking key inputs to create the inputted answers
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
    		
   		//Backspace for answer		
    	if(Event.current.keyCode == KeyCode.Backspace && (CurrentAnswer).Length >0)
    		CurrentAnswer = CurrentAnswer.Substring(0, CurrentAnswer.Length - 1);
    	
    	//Submitting the answer
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

	//When all problems are answered, check the answers
	if(CurrentQuestion >= 10){
		var correct = CheckAnswers();
		if(correct){
			Debug.Log("You Answered All Correctly");
			GUI.DrawTexture(Rect (600, 280, 200, 200),check);
			
			Application.LoadLevel("Locomotion");	
		}
		else{
			GUI.DrawTexture(Rect (600, 280, 200, 200),wrong);
			Application.LoadLevel("MultiplicationGame");
		}
	}
	//Debug.Log(TimeRemaining);
	if(TimeRemaining <= 0){
		GUI.DrawTexture(Rect (600, 280, 200, 200),wrong);
		Application.LoadLevel("MultiplicationGame");
	}
	
	
	var string = "";
	
	//drawing current code
	for(var i = 0; i < answers.length; i++){
		if(("" + answers[i]).Length == 1)
			GUI.DrawTexture(Rect (462 + 50*i, 185, 20, 30),nums[answers[i]]);
		if(("" + answers[i]).Length == 2){
			GUI.DrawTexture(Rect (456 + 50*i, 185, 20, 30),nums[parseInt((""+answers[i]).Substring(0,1))]);
			GUI.DrawTexture(Rect (456 + 50*i + 16, 185, 20, 30),nums[parseInt((""+answers[i]).Substring(1,1))]);
			}
	}
	
	//drawing factors
	if(CurrentQuestion < 10){
		GUI.DrawTexture(new Rect(395, 298, 60, 90), nums[factors[2 * CurrentQuestion]], ScaleMode.ScaleToFit, true);
		GUI.DrawTexture(new Rect(520, 298, 60, 90), nums[factors[2 * CurrentQuestion + 1]], ScaleMode.ScaleToFit, true);
	}
	
	Debug.Log(CurrentAnswer);
	if(CurrentAnswer.Length == 1){
		GUI.DrawTexture(new Rect(640, 298, 60, 90), nums[parseInt(CurrentAnswer.Substring(0,1))], ScaleMode.ScaleToFit, true);
		}
	if(CurrentAnswer.Length == 2){
		GUI.DrawTexture(new Rect(640, 298, 60, 90), nums[parseInt(CurrentAnswer.Substring(0,1))], ScaleMode.ScaleToFit, true);
		GUI.DrawTexture(new Rect(680, 298, 60, 90), nums[parseInt(CurrentAnswer.Substring(1,1))], ScaleMode.ScaleToFit, true);
		}
		
	//GUI.DrawTexture(Rect (495, 500, 60, 90),nums[factors[2 * CurrentQuestion+1]]);
	
	//GUI.DrawTexture(Rect (360, 240, 20, 30),two);
	//GUI.Button (Rect (1000, 29, 100, 30),(one),GUIStyle.none);
    //GUI.Label (Rect (1000, 29, 100, 30), string);
    GUI.contentColor = Color.blue;
    //GUI.Rect(100, 100, 100, 100);
    //x-=1;
    
    seconds =  parseInt(time % 60);
    TimeRemaining = 60 - seconds;
    
    
   	 
    if(TimeRemaining >= 10){
    	GUI.DrawTexture(Rect (780, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(0,1))]);
    	GUI.DrawTexture(Rect (795, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(1,1))]);
    }
    if(TimeRemaining < 10 && TimeRemaining >= 0){
       	GUI.DrawTexture(Rect (780, 130, 20, 30),nums[0]);
    	GUI.DrawTexture(Rect (795, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(0,1))]);
    }
    
   	//Debug.Log(""+TimeRemaining);
    
    //var seconds = guiTime.
    
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
function delayTime(){
	yield WaitForSeconds(1);
}

function reset(){
	time = 0;
	seconds = 0;
	CurrentQuestion = 0;
	answers = [0,0,0,0,0,0,0,0,0,0];
	CreateNumbers();
}

function Update(){
	for(var i = CurrentQuestion; i < answers.length; i++){
		answers[i] = parseInt(Random.value * 10);
	}
	
	time += Time.deltaTime;
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


