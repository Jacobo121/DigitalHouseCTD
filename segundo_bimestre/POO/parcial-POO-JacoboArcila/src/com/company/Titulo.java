package com.company;

public abstract class Titulo {
    private Persona persona;
    private Integer cantMaterias;
    private String fechaIncio;
    private String fechaFin;
    private Boolean selloMinisterio;
    private Boolean selloInstituto;

    public Titulo(Persona persona, Integer cantMaterias, String fechaIncio, String fechaFin, Boolean selloMinisterio, Boolean selloInstituto) {
        this.persona = persona;
        this.cantMaterias = cantMaterias;
        this.fechaIncio = fechaIncio;
        this.fechaFin = fechaFin;
        this.selloMinisterio = selloMinisterio;
        this.selloInstituto = selloInstituto;
    }

    public Boolean puedeEjercer() {
        return selloInstituto == true && selloMinisterio == true;
    }
}
