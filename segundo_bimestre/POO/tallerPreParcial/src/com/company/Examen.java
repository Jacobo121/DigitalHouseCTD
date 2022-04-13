package com.company;

public abstract class Examen {
    private String titulo;
    private Alumno alumno;
    private String enunciado;
    private Double nota;

    public Examen(String titulo, Alumno alumno, String enunciado, Double nota) {
        this.titulo = titulo;
        this.alumno = alumno;
        this.enunciado = enunciado;
        this.nota = nota;
    }

    public Boolean aprobado() {
        return nota >= 4;
    }

    public Double getNota() {
        return nota;
    }
}
