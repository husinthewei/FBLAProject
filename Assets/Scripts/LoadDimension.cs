﻿using UnityEngine;
using System.Collections;

public class LoadDimension : MonoBehaviour {

    void OnTriggerEnter()
    {
		if(Application.loadedLevelName == "2D1"){
        Application.LoadLevel("Dimension2");
		}
		else if(Application.loadedLevelName == "2D1_to_L"){
			Application.LoadLevel("Locomotion");
		}
    }

}