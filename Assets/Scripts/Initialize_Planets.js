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

var Planets = [Xenor, Mazka3, Plumona, Fazeon, Vagrant, Talatia, Linithium, Santron];

function Start () {
    var indexes = findIndexes();
    for(var i = 0; i < Planets.length; i+=1){
        if(i == indexes[0] || i == indexes[1] || i==indexes[2]){
            var x = Random.value * 250;
            var y = Random.value * 50;
            var z = Random.value * 250;
            //Planets[i].transform.position = Vector3(x, y, z);
        }
        else{
            print("Destroyed" + i);
            Destroy(Planets[i]);
            //Planets[i].SetActive(false);            
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

    return indexes;
}
function RandomizeLocation () {

}