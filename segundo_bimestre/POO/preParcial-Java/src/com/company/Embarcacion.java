package com.company;

public abstract class Embarcacion {
    private Capitan capitan;
    private Double precioBase;
    private Double precioAdicional;
    private Integer anioFabricacion;
    private Double eslora;

    public Embarcacion(Capitan capitan, Double precioBase, Double precioAdicional, Integer anioFabricacion, Double eslora) {
        this.capitan = capitan;
        this.precioBase = precioBase;
        this.precioAdicional = precioAdicional;
        this.anioFabricacion = anioFabricacion;
        this.eslora = eslora;
    }

    public Double calcularMonto() {
        if(anioFabricacion > 2020) {
            return precioBase + precioAdicional;
        } else {
            return precioBase;
        }
    }
}
