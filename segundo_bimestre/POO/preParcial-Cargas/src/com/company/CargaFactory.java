package com.company;

public class CargaFactory {
    private static CargaFactory instance;

    private CargaFactory() {

    }

    public static CargaFactory getInstance() {
        if(instance == null) {
            instance = new CargaFactory();
        }
        return instance;
    }

    public Carga generarCarga(String codigo) {
        switch (codigo) {
            case "TV" :
                return new Simple("TV", "32' LCD", 3.0, false );
            case "Medicamentos" :
                return new Simple("caja Medicamentos", "medicamento mieltertos", 2.0, true);
            case "Contenedor" :
                Contenedor contenedor = new Contenedor("contenedor1", "contiene dos cargas simples", 100.0);
                contenedor.agregarCargas(generarCarga("TV"));
                contenedor.agregarCargas(generarCarga("Medicamentos"));
                return contenedor;
        }
        return null;
    }
}
