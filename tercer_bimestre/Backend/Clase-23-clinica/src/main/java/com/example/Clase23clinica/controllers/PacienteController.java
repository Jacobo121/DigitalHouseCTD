package com.example.Clase23clinica.controllers;

import com.example.Clase23clinica.models.Paciente;
import com.example.Clase23clinica.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PacienteController {

    @Autowired
    public PacienteService pacienteService;

    @GetMapping("/todos")
    public String getAll(Model model){
        model.addAttribute("name", pacienteService.getAll().toString());
        return "todos";
    }

    @GetMapping("/email")
    public String getPacientByEmail(@RequestParam(name="name", required=false, defaultValue="mail@mail.com") String email, Model model){
        Paciente paciente= pacienteService.getPacientByEmail(email);

        if(paciente == null) return "no se encontro paciente con ese email";

        model.addAttribute("name", paciente.getNombre());
        model.addAttribute("surname", paciente.getApellido());
        model.addAttribute("matricula", paciente.getOdontologo().getMatricula());

        return "email";
    }
}

