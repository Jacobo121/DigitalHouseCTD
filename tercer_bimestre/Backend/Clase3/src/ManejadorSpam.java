public class ManejadorSpam extends Manejador{
    @Override
    public void comprobar(Mail elmail) {
        System.out.println("Marcado como SPAM!!!!!!!!!!!!!");
    }
}
