package com.company;

public class PizzaFactory {
    private static PizzaFactory instance;

    private PizzaFactory() {

    }

    public static PizzaFactory getInstance() {
        if(instance == null) {
            instance = new PizzaFactory();
        }
        return instance;
    }

    public Pizza generarPizza(String codigo) {
        switch (codigo) {
            case "muzzarella":
                return new Simple("muzzarella", "pizza de muzzarella", 700.0, false);
            case "especial":
                return new Simple("especial", "pizza de especial", 850.0, false);
            case "anana":
                return new Simple("anana", "pizza de anana", 950.0, false);
            case "combinada":
                Combinada combinada = new Combinada("combinada", "mitad especial y mitad anana");
                combinada.agregarPizzas(generarPizza("especial"));
                combinada.agregarPizzas(generarPizza("anana"));
                return combinada;
        }
        return null;
    }
}
