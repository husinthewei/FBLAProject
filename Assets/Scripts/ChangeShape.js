#pragma strict

var sphere : GameObject;
var cube : GameObject;
var horizCube : GameObject;
sphere = GameObject.Find("Ship");
cube = GameObject.Find("Cube");
horizCube = GameObject.Find("horizCube");
var controller : CharacterController;
controller = GetComponent.<CharacterController>();


//disable GameObjects other than sphere to start
cube.SetActive(false);
horizCube.SetActive(false);

 
function Update(){
	//switch to vertical rectangle
    if (Input.GetKeyDown(KeyCode.F)){
        if(sphere.activeSelf == true){
            sphere.SetActive(false);
            cube.SetActive(true);
	        controller.radius = 0.01;


        }else if(horizCube.activeSelf == true){
            horizCube.SetActive(false);
            cube.SetActive(true);
            controller.radius = 0.01;

        }
        }
        //switch to horizontal rectangle
        if(Input.GetKeyDown(KeyCode.G)){
        if(sphere.activeSelf == true){
            sphere.SetActive(false);
            horizCube.SetActive(true);
	        controller.radius = 0.1;
        
        }else if(cube.activeSelf == true){
            cube.SetActive(false);
            horizCube.SetActive(true);
            controller.radius = 0.1;
        }
        }
        //switch to sphere
        if(Input.GetKeyDown(KeyCode.H)){
        if(cube.activeSelf == true){
            cube.SetActive(false);
            sphere.SetActive(true);
	        controller.radius = 0.5;
        
        }else if(horizCube.activeSelf == true){
            horizCube.SetActive(false);
            sphere.SetActive(true);
            controller.radius = 0.5;
        }
        }
    }
