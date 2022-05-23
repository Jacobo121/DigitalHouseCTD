package digital.house.flyweight.factory;

import digital.house.flyweight.dto.Computer;

import java.util.HashMap;
import java.util.Map;

public class ComputerFactory {
    private static Map<String, Computer> macLigero = new HashMap<>();

    public Computer getComputer(int ram, int disco) {
        String clave = "key: " + ram + ":" + disco;
        System.out.println(clave);

        if(!macLigero.containsKey(clave)) {
            macLigero.put(clave, new Computer(ram, disco));
            System.out.println("PC creada de cero");
            return macLigero.get(clave);
        }
        System.out.println("PC obtenida del hashMap");
        return macLigero.get(clave);
    }
}
