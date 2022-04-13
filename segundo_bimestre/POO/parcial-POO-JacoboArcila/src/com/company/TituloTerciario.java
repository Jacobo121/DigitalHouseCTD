package com.company;

public class TituloTerciario extends Titulo {
    private String validacion;

    public TituloTerciario(Persona persona, Integer cantMaterias, String fechaIncio, String fechaFin, Boolean selloMinisterio, Boolean selloInstituto, String validacion) {
        super(persona, cantMaterias, fechaIncio, fechaFin, selloMinisterio, selloInstituto);
        this.validacion = validacion;
    }

    public Boolean validoNacional() {
        return validacion == "NACIONAL";
    }
}
