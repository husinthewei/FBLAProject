using UnityEngine;
using System.Collections;

public class Two_D_OneResetNotInvisible : MonoBehaviour {
    public CharacterController controller;
    void OnTriggerEnter()
    {
        controller = GetComponent<CharacterController>();
        if (controller.radius != 0.0F)
            Application.LoadLevel("2D1");
    }
}

