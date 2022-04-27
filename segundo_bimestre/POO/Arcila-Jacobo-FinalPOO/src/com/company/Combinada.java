package com.company;

import java.util.ArrayList;
import java.util.List;

public class Combinada  extends Pizza{
    private List<Pizza> pizzas;

    public Combinada(String nombre, String descripcion) {
        super(nombre, descripcion);
        this.pizzas = new ArrayList<>();
    }

    public void agregarPizzas(Pizza pizza) {
        pizzas.add(pizza);
    }

    @Override
    public Double calcularPrecio() {
        Double totalPrecio = 0.0;
        Double sumaPizzas = 0.0;
        for (Pizza pizza : pizzas) {
            sumaPizzas += pizza.calcularPrecio();
           totalPrecio = sumaPizzas / pizzas.stream().count();

        }
        return totalPrecio;
    }
}
