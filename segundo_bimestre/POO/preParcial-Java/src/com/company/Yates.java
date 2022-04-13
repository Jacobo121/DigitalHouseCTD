package com.company;

public class Yates extends Embarcacion implements Comparable{
    private Integer cantidadMastiles;

    public Yates(Capitan capitan, Double precioBase, Double precioAdicional, Integer anioFabricacion, Double eslora, Integer cantidadMastiles) {
        super(capitan, precioBase, precioAdicional, anioFabricacion, eslora);
        this.cantidadMastiles = cantidadMastiles;
    }

    @Override
    public int compareTo(Object o) {
        return 0;
    }
}
