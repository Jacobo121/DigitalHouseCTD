package com.example.Clase23clinica.services;

import com.example.Clase23clinica.models.Odontologo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OdontologoService {
    private List<Odontologo> odontologoList = new ArrayList<>();

    public OdontologoService() {
        odontologoList.add(new Odontologo(1L, "Juan", "perez", "123"));
    }

    public List<Odontologo> getOdontologoList() {
        return odontologoList;
    }

    public Odontologo getOdontologoById(long id) {
        return odontologoList.stream().filter(x -> x.getId() == (id)).findFirst().orElse(null);
    }
}
