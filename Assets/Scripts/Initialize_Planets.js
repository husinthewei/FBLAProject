#pragma strict
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

//variable to keep track of if Initialize_planets or Load_Planets is to be used
static var Called = false;
//var to keep trac of both current level, and which scene to load back into from the minigames
static var Dim = 1;
//array containg data on which planets were initialized
static var indexes = [-1,-1];

function Start () {
//check if Initialized_Planets was already called
    if(Called != true){
    //Increment the scene counter. Current level is Dim - 1
    Dim++;
    //reset health
    HealthBar.health = 100;
    //reset checks if games are done
    DivisionGame.Donediv = false;
    GrammarGame.Donegram = false;
    MultGame.Donemult = false;
    PercentGame.Doneper = false;
    ScienceGame.Donesci = false;
    VocabGame.Donevoc = false;
    HistoryGame.Donehist = false;
    UnitGame.Doneunit = false;
    //Randomly decide which planets to be kept.
    findIndexes();
    //8 is number of planets
    for(var i = 0; i < 8; i+=1){
        if(i != indexes[0] && i != indexes[1]){
            //destroy the planets not in indexes
            switch(i){
                case 0:
                    Destroy(Xenor);
                    break;
                case 1:
                    Destroy(Mazka3);
                    break;
                case 2:
                    Destroy(Plumona);
                    break;
                case 3:
                    Destroy(Fazeon);
                    break;
                case 4:
                    Destroy(Vagrant);
                    break;
                case 5:
                    Destroy(Talatia);
                    break;
                case 6:
                    Destroy(Linithium);
                    break;
                case 7:
                    Destroy(Santron);
                    break;
            }

        }

    }
}
//Ensure Initialize_Planets is not called again for this level
Called = true;
}
//randomly decide which planets are not destroyed
function findIndexes(){
    var first: int;
    var second: int;
    var third: int;
    first = 11;
    second = 11;
    third = 11;
    var count = 0;
    while(count <2){
        var num = parseInt(Random.value * 8);
        if(indexes[0] != num && indexes[1] != num){
            indexes[count] = num;
            count++;
        }
    }
    return indexes;
}

//getter for static var indexes
public static function getIndexes(){
return indexes;
}
