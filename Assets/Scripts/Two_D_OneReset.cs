using UnityEngine;
using System.Collections;

public class Two_D_OneReset : MonoBehaviour {

    void onCollisionEnter()
    {
        print("UHHHHH?");
        Application.LoadLevel("2D1");
    }
}
