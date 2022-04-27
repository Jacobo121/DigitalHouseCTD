package com.company;

public abstract class Carga {
    private String nombre;
    private String description;

    public Carga(String nombre, String description) {
        this.nombre = nombre;
        this.description = description;
    }

    public abstract Double calcularPeso();

    @Override
    public String toString() {
        return "Nombre: " + nombre + "\n Peso: " + calcularPeso() + "Kg";
    }
}
