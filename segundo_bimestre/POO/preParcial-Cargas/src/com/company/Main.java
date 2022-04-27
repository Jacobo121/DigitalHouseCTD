package com.company;

public class Main {

    public static void main(String[] args) {
	    Barco barco = new Barco();

        CargaFactory factory = CargaFactory.getInstance();

        barco.agregarCargas(factory.generarCarga("TV"));
        barco.agregarCargas(factory.generarCarga("Medicamentos"));
        barco.agregarCargas(factory.generarCarga("Contenedor"));

        barco.mostrarCargas();
    }
}
