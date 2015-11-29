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

var indexes = [0,0,0];

var Called;

function Start () {
	//indexes = Initialize_Planets.getIndexes();
	getCalled();
    print("inStart");
    //8 is number of planets
    if(Called == true){
    for(var i = 0; i < 8; i+=1){
        if(i != indexes[0] && i != indexes[1] && i!=indexes[2]){
            print("Destroyed" + i);
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
Called = Initialize_Planets.Called;
}