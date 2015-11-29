using UnityEngine;
using System.Collections;

public class Reset : MonoBehaviour {
	
	void OnTriggerEnter()
	{
		if(Application.loadedLevelName == "2D1"){
			Application.LoadLevel("2D1");
		}
		else if(Application.loadedLevelName == "2D1_to_L"){
			Application.LoadLevel("2D1_to_L");
		}
		else if(Application.loadedLevelName == "2D2"){
			Application.LoadLevel("2D2");
		}
		else if(Application.loadedLevelName == "2D2_to_next"){
			Application.LoadLevel("2D2_to_next");
		}
		else if(Application.loadedLevelName == "2D3"){
			Application.LoadLevel("2D3");
		}
		else if(Application.loadedLevelName == "2D3_to_next"){
			Application.LoadLevel("2D3_to_next");
		}
	}
}