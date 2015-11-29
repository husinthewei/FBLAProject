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

static var Called = false;

static var indexes  = [0,0];

function Start () {
    print("inStart");
    //8 is number of planets
    if(Called == false){
    findIndexes();
    for(var i = 0; i < 8; i+=1){
        if(i != indexes[0] && i != indexes[1]){
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
Called = true;
}
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
    print(indexes[0]);
    print(indexes[1]);
    return indexes;
}
function getIndexes(){
return indexes;
}
