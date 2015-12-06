#pragma strict
static var score = 0;
static var lives = 3;
function Update(){
//check if game was lost
if(lives == 0){
//reset all static vars seen by player and load
score = 0;
lives = 3;
Initialize_Planets.Dim = 1;
Application.LoadLevel("DeathScreen");
}
//check if game was won by the level achieved
if(Initialize_Planets.Dim == 8){
Application.LoadLevel("EndGame");
}
}
