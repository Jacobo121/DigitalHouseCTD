package com.company;

import java.util.ArrayList;
import java.util.List;

public class Pizzeria {
    private List<Pizza> pizzas;

    public Pizzeria() {
        pizzas = new ArrayList<>();
    }

    public void agregarPizzas(Pizza pizza) {
        pizzas.add(pizza);
    }

    public void mostrarPizzas() {
        for (Pizza pizza : pizzas) {
            System.out.println(pizza);
        }
    }
}
