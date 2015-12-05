#pragma strict

//words
var AllChoices = [["ribosomes","ER","folicles","nucleus"],["cytoplasm","water","coffee","ethanethiol"],["cell membrane","plastic","DNA","keratin"] , ["nucleus","Golgi apparatus","lysosome","protein"] , ["cytoskeleton","bone","RNA","cytoplasm"] , ["glycoproteins","phospholipids","cell phones","cell walls"] , ["mitochondria","chloroplasts","ribosomes","lysosomes"] , ["cell wall","DNA","ribosomes","fungus"],["phosophlipids","proteins","peptidoglycan","sucrose"],["ribosome","nucleus","golgi apparatus","smooth ER"],["microtubules","microfilaments","intermediate filaments","DNA"],["sodium potassium pump","mitochondria","photosynthesis","cell memebrane upkeep"],["white","red","green","blue"],["antibodies","ribosomes","RNA","phospholipids"],["skin","inflammatory response","antibodies","cytotoxic T-cells"],["B-cells","T-cells","E-cells","A-cells"],["memory B-cells","skin cells","antibodies","helper T-cells"],["T-cells","B-cells","lymph nodes","antibodies"],["lymph nodes","brains","lungs","appendixes"]];

//definitions
var AllQuestions = ["What is the only organelle prokaryotic cells have?", "What is the fluid inside a cell called?", "_________ is the barrier between a cell and its external environment?" , "The _________ contains DNA" , "_________ holds the internal structure of the cell" , "What do cells use to communicate with each other on their cell membranes?" , "_________ produce most of a cell's ATP" , "What do plant cells have that animal cells do not?","_________ primarily makes up the cell membrane","What is the only non membrane bound organelle?","What is the largest filament component of the cytoskeleton?","_________ uses about 30% of your body's energy each day","_______ blood cells fight infection","_______ bunch pathogens together to make them easier to target","What is the body's first line of defense?","_______ target pathogens in the bloodstream","_______ can live for up to ten years","_______ mature in the thymus","_______ swell during infection"];

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
			if(ActivatePortal.getOneDone == true){
			ActivatePortal.setTwoDone(true);
			}
			if(ActivatePortal.getOneDone != true){
			ActivatePortal.setOneDone(true);
			}

			Application.LoadLevel("Locomotion");
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
     	    Application.LoadLevel("Locomotion");	
     
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
			reset();
			Application.LoadLevel("ScienceGame");
			}
	}
	//not delayed
	
	
	
	
	
	
	
	
	else{	 
	 //Setting up Time
	 seconds =  parseInt(time % 60);
     TimeRemaining = 59 - seconds;
     //Exit Puzzle Button
     if (GUI.Button(new Rect(10, 20, 100, 25), "Exit Puzzle")) 
         Application.LoadLevel("Locomotion");	
     
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
