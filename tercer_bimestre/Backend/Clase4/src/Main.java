import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Persona p1 = new Persona("juan", "perez", "54525554", "Vacuvid", new Date(120, 6, 5));
        Registro registro = new RegistroVacunaProxy();
        registro.registrar(p1.datos());

    }
}
