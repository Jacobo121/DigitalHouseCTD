package com.company;

public class TituloLicenciatura extends Titulo implements Comparable {
    private String temaTesis;
    private String fechaEntrega;
    private Integer cantTrabajos;

    public TituloLicenciatura(Persona persona, Integer cantMaterias, String fechaIncio, String fechaFin, Boolean selloMinisterio, Boolean selloInstituto, String temaTesis, String fechaEntrega, Integer cantTrabajos) {
        super(persona, cantMaterias, fechaIncio, fechaFin, selloMinisterio, selloInstituto);
        this.temaTesis = temaTesis;
        this.fechaEntrega = fechaEntrega;
        this.cantTrabajos = cantTrabajos;
    }

    @Override
    public int compareTo(Object o) {
        TituloLicenciatura otraLicenciatura = (TituloLicenciatura) o;
        if(this.cantTrabajos > otraLicenciatura.cantTrabajos) {
            return 1;
        } else if(this.cantTrabajos < otraLicenciatura.cantTrabajos) {
            return -1;
        }
        return 0;
    }
}
