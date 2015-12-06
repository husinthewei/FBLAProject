#pragma strict
var Portal : GameObject;
Portal = GameObject.Find("Portal");
//count how many games have been completed
var count = 0;
//local var for planet data, will be set to static var from Initialize_Planets by the same name
var indexes = [0,0];

var Xenor : GameObject;
var Mazka3 : GameObject;
var Plumona : GameObject;
var Fazeon : GameObject;
var Vagrant : GameObject;
var Talatia : GameObject;
var Linithium : GameObject;
var Santron : GameObject;
Xenor = GameObject.Find("Xenor");
Mazka3 = GameObject.Find("Mazka 3");
Plumona = GameObject.Find("Plumona");
Fazeon = GameObject.Find("Fazeon");
Vagrant = GameObject.Find("Vagrant");
Talatia = GameObject.Find("Talatia");
Linithium = GameObject.Find("Linithium");
Santron = GameObject.Find("Santron");



function Start () {
//deactivate portal if two games have not been completed
if(count!=2){
Portal.SetActive(false);
}
//check how many games have bben completed
check();
}

function check(){
 //set local var indexes to static var from Initialize_Planets by the same name
indexes = Initialize_Planets.getIndexes();
for(var i = 0; i < 8; i+=1){
        if(i == indexes[0] || i == indexes[1]){
        //increment count for each game that has been completed for each planet that is in indexes
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
                    if(MultGame.Donemult == true){
                    count++;
                    }
                    break;
            }

        }
//check if two games have been completed and set portal active if yes
if(count == 2){
Portal.SetActive(true);
//reset Called for next level
Initialize_Planets.Called = false;
//destroy planets in this level
Destroy(Xenor);
Destroy(Plumona);
Destroy(Mazka3);
Destroy(Fazeon);
Destroy(Linithium);
Destroy(Santron);
Destroy(Talatia);
Destroy(Vagrant);
}
}
}

