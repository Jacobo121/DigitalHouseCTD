import java.util.Date;

public class RegistroVacunaProxy implements Registro{
    @Override
    public void registrar(Object[] datos) {
        if(comprobarFecha((Date) datos[1])) {
            RegistroVacuna registro = new RegistroVacuna();
            registro.registrar(datos);
        } else {
            System.out.println("No se ha realizado el registro de: " + datos[0]);
        }
    }

    public boolean comprobarFecha(Date fecha) {
        return fecha.after(new Date());
    }
}
