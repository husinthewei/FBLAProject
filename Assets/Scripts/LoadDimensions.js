#pragma strict
function OnTriggerEnter()
    {
		if(Application.loadedLevel == "2D1"){
        Application.LoadLevel("Dimension2");
		}
		else if(Application.loadedLevel == "2D3_to_next"){
			Initialize_Planets.Dim = 1;
			Application.LoadLevel("Locomotion");
		}
		else if(Application.loadedLevel == "Dimension2"){
			Application.LoadLevel("2D3_to_next");
		}
		else{
		Initialize_Planets.Dim = 2;
		Application.LoadLevel ("2D1");
		}
    }