#pragma strict

var destroyed = true;
function Start () {
    var num = parseInt(Random.value * 3);
    if(num != 2)
        Destroy(gameObject);
    else
        destroyed = false;
    if(!destroyed){
        print("1");
        var x = Random.value * 250;
        var y = Random.value * 50;
        var z = Random.value * 250;
        transform.position = Vector3(x, y, z);
    }
}

function Update () {

}