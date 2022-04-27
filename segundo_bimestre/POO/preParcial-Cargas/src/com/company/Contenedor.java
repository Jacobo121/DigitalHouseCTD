package com.company;

import java.util.ArrayList;
import java.util.List;

public class Contenedor extends Carga {
    private Double pesoContenedor;
    private List<Carga> cargas;

    public Contenedor(String nombre, String description, Double pesoContenedor) {
        super(nombre, description);
        this.pesoContenedor = pesoContenedor;
        this.cargas = new ArrayList<>();
    }
    
    public void agregarCargas(Carga carga) {
        cargas.add(carga);
    }

    @Override
    public Double calcularPeso() {
        Double pesoTotal = 0.0;
        for (Carga carga : cargas) {
            pesoTotal += carga.calcularPeso();
        }
        return pesoTotal + pesoContenedor;
    }
}
