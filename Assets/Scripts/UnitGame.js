#pragma strict

//words
var AllChoices = [["3000 grams", "300 grams", "30 grams", "0 grams"], ["6600 grams", "660 grams", "66.6 grams", "0 grams"], ["8000 grams", "800 grams", "8 grams", "0 grams"], ["0.78 kilograms", "7.8 kilograms", "78 kilograms", "0 kilograms"], ["0.1 kilograms", "1 kilogram", "10 kilograms", "0 kilograms"], ["1 meter", "10 meters", "100 meters", "0.1 meters"], ["0.5 meters", "5 meters", "50 meters", "0 meters"], ["5 meters", "500 meters", "0.5 meters", "50 meters"], ["1000 cm", "2000 cm", "500 cm", "100 cm"], ["100 cm", "2000 cm", "500 cm", "10 cm"], ["800 cm", "8000 cm", "80 cm", "10 cm"], ["0 grams", "999 grams", "8 grams", "50 grams"], ["10 cm", "100 cm", "1 cm", "1000 cm"], ["100 cm", "10 cm", "1 cm", "1000 cm"], ["1 meter", "10 meters", "0.1 meters", "1000 meters"], ["0.1 meter", "10 meters", "1 meters", "1000 meters"], ["0.1 seconds", "0.01 seconds", "1 second", "10 seconds"], ["1 seconds", "0.01 seconds", "0.1 second", "10 seconds"], ["0.001 seconds", "0.01 seconds", "0.1 second", "1 second"], ["1000 ms", "100 ms", "10000 ms", "0.001 ms"], ["1 ms", "100 ms", "10000 ms", "0.001 ms"], ["0 grams", "100 grams", "10 grams", "5 grams"]];
//definitions
var AllQuestions = ["Convert 3 kilograms to grams", "Convert 6.6 kilograms to grams", "Convert 8 kilograms to grams", "Convert 780 grams to kilograms", "Convert 100 grams to kilograms", "Convert 100 cm to meters", "Convert 50 cm to meters", "Convert 500 cm to meters", "Convert 10 m into centimeters", "Convert 1 m into centimeters", "Convert 8 m into centimeters", "Convert 8 m into grams", "Convert 1 decimeter to centimeters", "Convert 10 decimeters to centimeters", "Convert 10 decimeters to meters", "Convert 1 decimeter to meters", "Convert 100 milliseconds to seconds","Convert 1000 milliseconds to seconds", "Convert 1 millisecond to seconds", "Convert 1 second to milliseconds", "Convert 0.001 seconds to milliseconds", "Convert 1 second to grams"];
var time : float;
var seconds: float;
var TimeRemaining : float;
TimeRemaining = 59;

var restartDelay = 0;
var wrongDelay = 0;
var currentQuestion = 0;

//Currently no answer
var Answer = -1;

var CorrectAnswers = 0;

static var Doneunit;

//Questions and answers that will be used (10)
var Questions = ["","","","","","","","","",""];
var Answers = [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]];
var ScrambledAnswers = [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]];
//Current choices

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

var done = false;
//array of the texture images
var nums = [zero,one,two,three,four,five,six,seven,eight,nine];

function Start () {
	reset();
	pickQuestions();
}

function OnGUI(){
	//Font for buttons
	var ChoiceStyle : GUIStyle;
	ChoiceStyle = new GUIStyle(GUI.skin.button);
    ChoiceStyle.fontSize = 24;
	ChoiceStyle.normal.textColor = Color.green;
	ChoiceStyle.hover.textColor = Color.green;
	
	//Font for correction
	var RedStyle : GUIStyle;
	RedStyle = new GUIStyle(GUI.skin.button);
    RedStyle.fontSize = 24;
	RedStyle.normal.textColor = Color.red;
	RedStyle.hover.textColor = Color.red;
	
	//Font for neutral
	var WhiteStyle : GUIStyle;
	WhiteStyle = new GUIStyle(GUI.skin.button);
    WhiteStyle.fontSize = 24;
	WhiteStyle.normal.textColor = Color.white;
	WhiteStyle.hover.textColor = Color.white;
	
	//Font for labels
	var labStyle : GUIStyle;
	labStyle = new GUIStyle(GUI.skin.label);
    labStyle.fontSize = 12;
	labStyle.normal.textColor = Color.green;
	labStyle.hover.textColor = Color.green;	
	
	
	if(done){
		if(CorrectAnswers >= 8){
			GUI.DrawTexture(Rect (600, 280, 200, 200),check);
			Doneunit = true;
			Score.score += 100;
			Score.score += TimeRemaining;
    		if(Initialize_Planets.Dim %2 == 1){
			Application.LoadLevel("Dimension2");
			}
			else{
			Application.LoadLevel("Locomotion");
			}
    		}
    	else{
    		reset();
    		wrongDelay = 0;
    		restartDelay = 300;	
    		done = false;
    		}	
	}
	else{
	
	
	
	
	
	//delay for showing actual answer
	if(wrongDelay != 0){
   		
		wrongDelay -=1;
	 	//Setting up Time
	 	seconds =  parseInt(time % 60);
     	TimeRemaining = 59 - seconds;
     	//Exit Puzzle Button
     	if (GUI.Button(new Rect(10, 20, 100, 25), "Exit Puzzle")) 
     	    if(Initialize_Planets.Dim %2 == 1){
			Application.LoadLevel("Dimension2");
			}
			else{
			Application.LoadLevel("Locomotion");
			}	
     
     	//Question
     	GUI.Label (Rect (390, 200, 1500, 300), Questions[currentQuestion], labStyle);
     	
     	//Score goal
     	GUI.Label (Rect (940, 120, 300, 300), CorrectAnswers + "/" + currentQuestion, labStyle);
     	GUI.Label (Rect (900, 140, 300, 300), "Goal: 8+/10", labStyle);		
     	if(TimeRemaining >= 10){
    	GUI.DrawTexture(Rect (780, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(0,1))]);
    	GUI.DrawTexture(Rect (795, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(1,1))]);
    	}
    	if(TimeRemaining < 10 && TimeRemaining >= 0){
       	GUI.DrawTexture(Rect (780, 130, 20, 30),nums[0]);
    	GUI.DrawTexture(Rect (795, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(0,1))]);
    	}
	
    	//finding correct scrambled index
    	var corInd = 0;
    	for(var z = 0; z < Answers[currentQuestion].length; z++){
    		if(Answers[currentQuestion][0] == ScrambledAnswers[currentQuestion][z])
    			corInd = z;
    	}
    	
    	Debug.Log(corInd + "    " + Answer);
    	if(corInd == 0)
    		if (GUI.Button(new Rect(435, 280, 240, 100), ScrambledAnswers[currentQuestion][0], ChoiceStyle)){}
	    if(Answer == 0)
    		if (GUI.Button(new Rect(435, 280, 240, 100), ScrambledAnswers[currentQuestion][0], RedStyle)){}
    	if(corInd != 0 && Answer != 0)
    		if (GUI.Button(new Rect(435, 280, 240, 100), ScrambledAnswers[currentQuestion][0], WhiteStyle)){}
    	
    	if(corInd == 1)
     		if (GUI.Button(new Rect(675, 280, 240, 100), ScrambledAnswers[currentQuestion][1], ChoiceStyle)){} 
    	if(Answer == 1)
     		if (GUI.Button(new Rect(675, 280, 240, 100), ScrambledAnswers[currentQuestion][1], RedStyle)){} 
    	if(corInd != 1 && Answer != 1)
     		if (GUI.Button(new Rect(675, 280, 240, 100), ScrambledAnswers[currentQuestion][1], WhiteStyle)){}
    	
    	if(corInd == 2)
     		if (GUI.Button(new Rect(435, 380, 240, 100), ScrambledAnswers[currentQuestion][2], ChoiceStyle)){} 
    	if(Answer == 2)
     		if (GUI.Button(new Rect(435, 380, 240, 100), ScrambledAnswers[currentQuestion][2], RedStyle)){}
    	if(corInd != 2 && Answer != 2)
     		if (GUI.Button(new Rect(435, 380, 240, 100), ScrambledAnswers[currentQuestion][2], WhiteStyle)){} 
    		
     	if(corInd == 3)
     		if (GUI.Button(new Rect(675, 380, 240, 100), ScrambledAnswers[currentQuestion][3], ChoiceStyle)){}  
    	if(Answer == 3)
     		if (GUI.Button(new Rect(675, 380, 240, 100), ScrambledAnswers[currentQuestion][3], RedStyle)){} 
    	if(corInd != 3 && Answer != 3)
     		if (GUI.Button(new Rect(675, 380, 240, 100), ScrambledAnswers[currentQuestion][3], WhiteStyle)){} 	
     		
	    			    				    			    				    			    				    			    			
    	if(wrongDelay == 0){
    		Answer = -1;
    		currentQuestion++;
    		if(currentQuestion == 10)
    			done = true; 
    	}
    	
    	  ////if(wrongDelay == 0)
    		//currentQuestion++;

    	
	}
	
	
	
	
	
	
	else{
	if(restartDelay != 0){
		Answer = -1;
		restartDelay -=1;
		GUI.DrawTexture(Rect (600, 280, 200, 200),wrong);
		if(restartDelay == 0){
			Score.score += -50;
			reset();
			Application.LoadLevel("UnitGame");
			}
	}
	//not delayed
	
	
	
	
	
	
	
	
	else{	 
	 //Setting up Time
	 seconds =  parseInt(time % 60);
     TimeRemaining = 59 - seconds;
     //Exit Puzzle Button
     if (GUI.Button(new Rect(10, 20, 100, 25), "Exit Puzzle")) 
         if(Initialize_Planets.Dim %2 == 1){
			Application.LoadLevel("Dimension2");
			}
			else{
			Application.LoadLevel("Locomotion");
			}	
     
     //Question
     GUI.Label (Rect (390, 200, 1500, 300), Questions[currentQuestion], labStyle);
     
     //Score goal
     GUI.Label (Rect (940, 120, 300, 300), CorrectAnswers + "/" + currentQuestion, labStyle);
     GUI.Label (Rect (900, 140, 300, 300), "Goal: 8+/10", labStyle);
          
     //Buttons for choices
     if (GUI.Button(new Rect(435, 280, 240, 100), ScrambledAnswers[currentQuestion][0], ChoiceStyle)) 
         Answer = 0;	
     if (GUI.Button(new Rect(675, 280, 240, 100), ScrambledAnswers[currentQuestion][1], ChoiceStyle)) 
         Answer = 1;	     
     if (GUI.Button(new Rect(435, 380, 240, 100), ScrambledAnswers[currentQuestion][2], ChoiceStyle)) 
         Answer = 2;	
     if (GUI.Button(new Rect(675, 380, 240, 100), ScrambledAnswers[currentQuestion][3], ChoiceStyle)) 
         Answer = 3;	         
                           
     
    if(TimeRemaining >= 10){
    	GUI.DrawTexture(Rect (780, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(0,1))]);
    	GUI.DrawTexture(Rect (795, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(1,1))]);
    }
    if(TimeRemaining < 10 && TimeRemaining >= 0){
       	GUI.DrawTexture(Rect (780, 130, 20, 30),nums[0]);
    	GUI.DrawTexture(Rect (795, 130, 20, 30),nums[parseInt((""+TimeRemaining).Substring(0,1))]);
    }
    if(TimeRemaining == 0)
    	done = true;
    if(Answer != -1){
    	if(Answers[currentQuestion][0] == ScrambledAnswers[currentQuestion][Answer]){
    		currentQuestion +=1;
    		CorrectAnswers +=1;
    		Answer = -1;   		
    	}
    	else{
    		wrongDelay = 150;	
    	}
    	if(currentQuestion == 10)
    		done = true;
    }	
    	
	  }
	}
	
}	
}

function Update(){
	time += Time.deltaTime;
}

function pickQuestions(){
	Questions = ["","","","","","","","","",""];
	Answers = [["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""],["","","",""]];
	for(var i = 0 ; i < Questions.length; i++){
		var ind = 0;
		var temp = "";
		//keeps getting random questions until a unique one is found
		while(QuestionsContains(temp)){
			ind = parseInt(Random.value * AllChoices.Length);
			temp = AllQuestions[ind];
		}
		Questions[i] = temp;
		Answers[i] = AllChoices[ind];
	}
	
	//randomizes the order of the choices
	for(var j = 0; j < ScrambledAnswers.length; j++){
		for(var k = 0; k < 4; k++){
			temp = "";
			//makes sure each choice is unique
			while(ScrambledAnswers[j][0] == temp || ScrambledAnswers[j][1] == temp || ScrambledAnswers[j][2] == temp || ScrambledAnswers[j][3] == temp){
				temp = Answers[j][parseInt(Random.value * 4)];
			}
			ScrambledAnswers[j][k] = temp; 
		}
	}
	
	//for(var l = 0; l < Questions.length; l++){
//		Debug.Log(Questions[l] + " " + Answers[l][0] + " " + Answers[l][1] + " " + Answers[l][2] + " " + Answers[l][3] + "      " + ScrambledAnswers[l][0] + " " + ScrambledAnswers[l][1] + " " + ScrambledAnswers[l][2] + " " + ScrambledAnswers[l][3]);
//	}
	
	
}

function reset(){
	TimeRemaining = 59;

	restartDelay = 0;
	wrongDelay = 0;
	currentQuestion = 0;
	Answer = -1;
	CorrectAnswers = 0;	
}

function QuestionsContains(obj){
	for(var i = 0; i < Questions.length; i++){
		if(Questions[i] == obj)
			return true;
	}
	return false;
}
