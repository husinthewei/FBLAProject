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

//local var for planet data, will be set to static var from Initialize_Planets by the same name
var indexes = [0,0];
//local var for whether Initialize_Planets os Load__Planets will be called, will be set to static var from Initialize_Planets by the same name
var Called;

function Start () {
    //set local var indexes to static var from Initialize_Planets by the same name
	indexes = Initialize_Planets.getIndexes();
	getCalled();
    //if Called is not false, then Load_Planets is to be used
    if(Called != false){
     //8 is number of planets
     for(var i = 0; i < 8; i+=1){
        if(i != indexes[0] && i != indexes[1]){
            //Destroy the planets not in indexes. indexes holds the data of the planets that were selected by Initialize_Planets for this level
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
}

function getCalled(){
//set local var Called to static var from Initialze_Planets by same name
Called = Initialize_Planets.Called;
}