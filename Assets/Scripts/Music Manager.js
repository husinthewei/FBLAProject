#pragma strict
var NewMusic: AudioClip;
function Start () {

}

function Update () {

}
 
function Awake () { 
//var go = GameObject.Find("Game Music"); 

//var aud = go.GetComponent<AudioSource>();
//Finds the game object called Game Music, if it goes by a different name, change this.
//go.GetComponent<AudioSource>().clip = NewMusic; 


//Replaces the old audio with the new one set in the inspector. 
//go.audio.Play(); //Plays the audio. 


	var audio : AudioSource = GetComponent.<AudioSource>();
	audio.Play();
}