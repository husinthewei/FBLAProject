#pragma strict
var Portal : GameObject;
var Called;
Portal = GameObject.Find("Portal");
var count = 0;
var indexes = [0,0];

function Start () {
if(count!=2){
Portal.SetActive(false);
}
getCalled();
check();
}

function check(){
indexes = Initialize_Planets.getIndexes();
for(var i = 0; i < 8; i+=1){
        if(i == indexes[0] || i == indexes[1]){
            switch(i){
                case 0:
                    if(ScienceGame.Donesci == true){
                    count++;
                    }
                    break;
                case 1:
                    if(GrammarGame.Donegram == true){
                    count++;
                    }
                    break;
                case 2:
                    if(PercentGame.Doneper == true){
                    count++;
                    }
                    break;
                case 3:
                    if(DivisionGame.Donediv == true){
                    count++;
                    }
                    break;
                case 4:
                    if(UnitGame.Doneunit == true){
                    count++;
                    }
                    break;
                case 5:
                    if(HistoryGame.Donehist == true){
                    count++;
                    }
                    break;
                case 6:
                    if(VocabGame.Donevoc == true){
                    count++;
                    }
                    break;
                case 7:
                    if(MultiplicationGame.Donemult == true){
                    count++;
                    }
                    break;
            }

        }

if(count == 2){
Portal.SetActive(true);
Called = false;
}
}
}

function Update () {
	one = OneDone;
	two = TwoDone;
	if(OneDone == true && TwoDone == true)
		Portal.SetActive(true);
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
