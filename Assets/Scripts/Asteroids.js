#pragma strict

function OnTriggerEnter(){
HealthBar.health += -15;
Score.score += -10;
}