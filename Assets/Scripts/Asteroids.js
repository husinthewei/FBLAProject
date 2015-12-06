#pragma strict
//when the ship collides with the asteroid, reduce health by 15 and score by 10
function OnTriggerEnter(){
HealthBar.health += -15;
Score.score += -10;
}