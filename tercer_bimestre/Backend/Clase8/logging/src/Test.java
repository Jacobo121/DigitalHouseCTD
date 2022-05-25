import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import java.io.File;
import java.util.Arrays;

public class Test {
    private static final Logger logger = Logger.getLogger(Test.class);

    public static void main(String[] args) {

        File log4file = new File("./src/logging/config/log4j.properties");
        PropertyConfigurator.configure(log4file.getAbsolutePath());

        ListaPromedio listaPromedioMayorA5 = null;
        ListaPromedio listaPromedioMayorA10 = null;
        ListaPromedio listaPromedioMayorVacia = null;

        try {
            listaPromedioMayorA5 = new ListaPromedio(Arrays.asList(1,4,5,7,1,5));
            listaPromedioMayorA10 = new ListaPromedio(Arrays.asList(1,4,5,7,1,5,8,4,1,5));
            listaPromedioMayorVacia = new ListaPromedio(Arrays.asList());
        } catch (Exception e) {
            logger.error("La lista esta vacia ", e);
        }

    }
}
