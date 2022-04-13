package com.company;

public class Main {

    public static void main(String[] args) {
	    Persona jacobo = new Persona("Jacobo", "Arcila", 123, 17);
        Persona sofia = new Persona("Sofia", "Arcila", 123, 17);
        TituloTerciario titulo = new TituloTerciario(jacobo, 2, "20/20/20", "20/20/20", true, true, "NACIONAL");
        //System.out.println(titulo.validoNacional());

        TituloLicenciatura tituloJacobo = new TituloLicenciatura(jacobo, 2, "20/20/20", "20/20/20",true, true, "POO", "20/20/20", 3);
        TituloLicenciatura tituloSofia = new TituloLicenciatura(sofia, 2, "20/20/20", "20/20/20",true, true, "POO", "20/20/20", 5);

        //System.out.println(tituloJacobo.compareTo(tituloSofia));

    }
}
