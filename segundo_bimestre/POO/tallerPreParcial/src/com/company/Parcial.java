package com.company;

public class Parcial extends Examen {
    private Integer numeroUnidad;
    private Integer reintentoNumero;

    public Parcial(String titulo, Alumno alumno, String enunciado, Double nota, Integer numeroUnidad, Integer reintentoNumero) {
        super(titulo, alumno, enunciado, nota);
        this.numeroUnidad = numeroUnidad;
        this.reintentoNumero = reintentoNumero;
    }

    public Boolean intentosRecuperacion() {
        if(numeroUnidad <= 3 && reintentoNumero < 3) {
            return true;
        }
        if(numeroUnidad > 2 && reintentoNumero < 2) {
            return true;
        }
        return false;
    }


}
