#pragma strict

var sphere : GameObject;
var cube : GameObject;
sphere = GameObject.Find("Ship");
cube = GameObject.Find("Cube");
public static var controller : CharacterController;
controller = GetComponent.<CharacterController>();


//disable GameObjects other than sphere to start
cube.SetActive(false);

 
function Update(){
    if (Input.GetKeyDown(KeyCode.F)){
        if(sphere.activeSelf == true){
            //cube.transform.position = sphere.transform.position;
            sphere.SetActive(false);
            cube.SetActive(true);
	        controller.radius = 0.0;


        }else if(cube.activeSelf == true){
            //sphere.transform.position = cube.transform.position;
            cube.SetActive(false);
            sphere.SetActive(true);
            controller.radius = 0.5;

        }
        }
    }
