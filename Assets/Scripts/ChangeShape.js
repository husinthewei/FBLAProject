#pragma strict

var sphere : GameObject;
var cube : GameObject;
sphere = GameObject.Find("Ship");
cube = GameObject.Find("Cube");
//disable GameObjects other than sphere to start
cube.SetActive(false);
collider.cube.GetComponent<BoxCollider>(enabled);
 
function Update(){
    if (Input.GetKeyDown(KeyCode.F)){
        if(sphere.activeSelf == true){
            cube.transform.position = sphere.transform.position;
            sphere.SetActive(false);
            cube.SetActive(true);
            collider.sphere.GetComponent<SphereCollider>(!enabled);
            collider.cube.GetComponent<BoxCollider>(enabled);
        }else if(cube.activeSelf == true){{
            sphere.transform.position = cube.transform.position;
            cube.SetActive(false);
            sphere.SetActive(true);
            collider.cube.GetComponent<BoxCollider>(!enabled);
            collider.sphere.GetComponent<SphereCollider>(enabled);
        }
        }
    }
}