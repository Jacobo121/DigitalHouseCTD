public class ManejadorTecnica extends Manejador{
    @Override
    public void comprobar(Mail elmail) {
        if((elmail.getDestino().equalsIgnoreCase(("tecnica@colmena.com")) ||
                elmail.getTema().equalsIgnoreCase("tecnico")))
        {
            System.out.println("Enviado a tecnico");
        }
        else {
            if (this.getSiguienteManejador() != null) {
                this.getSiguienteManejador().comprobar(elmail);
            }
        }
    }
}
