package com.company;

public class Final extends Examen implements Comparable {
    private Double notaOral;
    private String descripcion;

    public Final(String titulo, Alumno alumno, String enunciado, Double nota, Double notaOral, String descripcion) {
        super(titulo, alumno, enunciado, nota);
        this.notaOral = notaOral;
        this.descripcion = descripcion;
    }

    @Override
    public int compareTo(Object o) {
        Final otroFinal = (Final) o;
        Double promedioFinales = (this.getNota() + notaOral)/2;
        Double promedioFinalesOtro = (otroFinal.getNota() + otroFinal.notaOral)/2;

        if (promedioFinales > promedioFinalesOtro) {
            return 1;
        }
        if (promedioFinales < promedioFinalesOtro) {
            return -1;
        }
        return 0;
    }
}
