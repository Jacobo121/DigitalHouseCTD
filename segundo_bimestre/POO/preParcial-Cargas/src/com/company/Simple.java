package com.company;

public class Simple extends Carga {
    private Double pesoCarga;
    private Boolean refrigeracion;

    public Simple(String nombre, String description, Double pesoCarga, Boolean refrigeracion) {
        super(nombre, description);
        this.pesoCarga = pesoCarga;
        this.refrigeracion = refrigeracion;
    }

    @Override
    public Double calcularPeso() {
        Double totalCarga = 0.0;
        if (refrigeracion) {
            totalCarga = pesoCarga + (pesoCarga * 0.1);
            return totalCarga;
        }
        return pesoCarga;
    }
}
