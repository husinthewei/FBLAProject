#pragma strict
static var score = 0;
static var lives = 3;
function Update(){
print(score);
if(lives == 0){
score = 0;
lives = 3;
Initialize_Planets.Dim = 1;
Application.LoadLevel("Start");
}
if(Initialize_Planets.Dim == 8){
Application.LoadLevel("EndGame");
}
}
