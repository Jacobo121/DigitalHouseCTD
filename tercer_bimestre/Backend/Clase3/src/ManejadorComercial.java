public class ManejadorComercial extends Manejador {
    @Override
    public void comprobar(Mail elmail) {
        if((elmail.getDestino().equalsIgnoreCase(("comercial@colmena.com")) ||
                elmail.getTema().equalsIgnoreCase("comercial")))
        {
            System.out.println("Enviado a Comercial");
        }
        else {
            if (this.getSiguienteManejador() != null) {
                this.getSiguienteManejador().comprobar(elmail);
            }
        }
    }
}
