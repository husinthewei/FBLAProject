using UnityEngine;
using System.Collections;

public class SwitchScenes : MonoBehaviour {

    void OnTriggerEnter()
    {
		Application.LoadLevel ("2D1");
    }

}