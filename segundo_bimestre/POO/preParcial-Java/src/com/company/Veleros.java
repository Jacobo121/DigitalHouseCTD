package com.company;

public class Veleros extends Embarcacion {
    private Integer cantidadCamarotes;

    public Veleros(Capitan capitan, Double precioBase, Double precioAdicional, Integer anioFabricacion, Double eslora, Integer cantidadCamarotes) {
        super(capitan, precioBase, precioAdicional, anioFabricacion, eslora);
        this.cantidadCamarotes = cantidadCamarotes;
    }

    public Boolean esGrande() {
        return cantidadCamarotes > 4;
    }
}
