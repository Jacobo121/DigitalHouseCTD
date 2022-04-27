package com.company;
import java.util.ArrayList;
import java.util.List;

public class Barco {
    private List<Carga> cargas;

    public Barco() {
        cargas = new ArrayList<>();
    }

    public void agregarCargas(Carga carga) {
        cargas.add(carga);
    }

    public void mostrarCargas(){
        for (Carga carga : cargas) {
            System.out.println(carga);
        }
    }

}
