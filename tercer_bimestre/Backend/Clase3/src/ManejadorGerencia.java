public class ManejadorGerencia extends Manejador{
    @Override
    public void comprobar(Mail elmail) {
        if((elmail.getDestino().equalsIgnoreCase(("gerencia@colmena.com")) ||
                elmail.getTema().equalsIgnoreCase("gerencial")))
        {
            System.out.println("Enviado a Gerencia");
        }
        else {
            if (this.getSiguienteManejador() != null) {
                this.getSiguienteManejador().comprobar(elmail);
            }
        }
    }
}
