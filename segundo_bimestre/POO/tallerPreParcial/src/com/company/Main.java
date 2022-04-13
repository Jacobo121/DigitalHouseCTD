package com.company;

public class Main {

    public static void main(String[] args) {
        Alumno jacobo = new Alumno("Jacobo", "Apellido", 123);

        Final yo = new Final("POO", jacobo, "No se programar", 10.0, 7.0, "hola");
        Final tu = new Final("POO", jacobo, "No se programar", 9.0, 7.0, "hola");

        System.out.println(yo.aprobado());
        System.out.println(yo.compareTo(tu));
    }
}
