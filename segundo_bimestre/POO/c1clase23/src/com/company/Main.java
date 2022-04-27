package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here



      Instituto instituto = new Instituto();

      OfertaAcademicaFactory factory = OfertaAcademicaFactory.getInstance();

      instituto.agregarOfertaAcademica(factory.generarOfertaAcademica("FRONTEND"));
      instituto.agregarOfertaAcademica(factory.generarOfertaAcademica("BACKEND"));
      instituto.agregarOfertaAcademica(factory.generarOfertaAcademica("FULLSTACK"));


      instituto.generarInforme();



    }
}
