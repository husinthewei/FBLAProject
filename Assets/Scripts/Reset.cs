﻿using UnityEngine;
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
	}
}