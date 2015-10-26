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

var Variance : int;
//Variance = 400;

function Start () {
    print("inStart");
    var indexes = findIndexes();
    //8 is number of planets
    for(var i = 0; i < 8; i+=1){
        if(i == indexes[0] || i == indexes[1] || i==indexes[2]){
            var x = -1.912;
            var y = -1.109;
            var z = 10.907;
           if(Random.value * 2 ==0)
                x += Random.value * Variance;
            else
                x += Random.value * -(Variance);

            y += Random.value * 50;

            if(Random.value * 2 ==0)
                z += Random.value * -Variance;
            else
                z += Random.value * Variance;

            //Planets[i].transform.position = Vector3(x, y, z);
            switch(i){
                case 0:
                    Xenor.transform.position = Vector3(x, y, z);
                    break;
                case 1:
                    Mazka3.transform.position = Vector3(x, y, z);
                    break;
                case 2:
                    Plumona.transform.position = Vector3(x, y, z);
                    break;
                case 3:
                    Fazeon.transform.position = Vector3(x, y, z);
                    break;
                case 4:
                    Vagrant.transform.position = Vector3(x, y, z);
                    break;
                case 5:
                    Talatia.transform.position = Vector3(x, y, z);
                    break;
                case 6:
                    Linithium.transform.position = Vector3(x, y, z);
                    break;
                case 7:
                    Santron.transform.position = Vector3(x, y, z);
                    break;
            }
        }
        else{
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

function findIndexes(){
    var first: int;
    var second: int;
    var third: int;
    first = 11;
    second = 11;
    third = 11;
    var indexes = [first, second, third];
    var count = 0;
    while(count <3){
        var num = parseInt(Random.value * 8);
        if(indexes[0] != num && indexes[1] != num && indexes[2] != num){
            indexes[count] = num;
            count++;
        }
    }
    print(indexes[0]);
    print(indexes[1]);
    print(indexes[2]);
    return indexes;
}
function RandomizeLocation () {

}