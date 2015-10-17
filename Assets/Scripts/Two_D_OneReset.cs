using UnityEngine;
using System.Collections;

public class Two_D_OneReset : MonoBehaviour {

    void OnTriggerEnter()
    {
        Application.LoadLevel("2D1");
    }
}
