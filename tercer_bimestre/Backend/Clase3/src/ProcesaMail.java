public class ProcesaMail {
    public static void main(String[] args) {
        CompruebaMail proceso = new CompruebaMail();
        proceso.comprobar(new Mail("mio@gmail.com", "tecnica@colmena.com", "reclamo"));
    }
}
