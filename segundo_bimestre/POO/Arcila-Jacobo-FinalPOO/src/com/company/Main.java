package com.company;

public class Main {

    public static void main(String[] args) {
	    Pizzeria pizzeria = new Pizzeria();

        PizzaFactory factory = PizzaFactory.getInstance();

        pizzeria.agregarPizzas(factory.generarPizza("muzzarella"));
        pizzeria.agregarPizzas(factory.generarPizza("especial"));
        pizzeria.agregarPizzas(factory.generarPizza("anana"));
        pizzeria.agregarPizzas(factory.generarPizza("combinada"));

        pizzeria.mostrarPizzas();
    }
}
