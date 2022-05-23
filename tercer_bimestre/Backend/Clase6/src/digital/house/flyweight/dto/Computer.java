package digital.house.flyweight.dto;

public class Computer {
    private int ram;
    private int disco;
    private static int contador;

    public Computer(int ram, int disco) {
        this.ram = ram;
        this.disco = disco;
        contador++;
    }


}
