public class CompruebaMail {
    Manejador incial;

    public CompruebaMail() {
        this.incial = new ManejadorGerencia();
        Manejador tecnica = new ManejadorTecnica();
        Manejador comercial = new ManejadorComercial();
        Manejador spam = new ManejadorSpam();

        incial.setSiguienteManejador(comercial);
        comercial.setSiguienteManejador(tecnica);
        tecnica.setSiguienteManejador(spam);
    }

    public void comprobar(Mail email) {
        incial.comprobar(email);
    }
}
