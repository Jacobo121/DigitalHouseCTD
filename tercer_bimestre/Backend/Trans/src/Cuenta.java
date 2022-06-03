public class Cuenta {

    private Long id;
    private int nroCuenta;
    private String nombre;
    private double saldo;

    public Cuenta(int nroCuenta, String nombre, double saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.nroCuenta = nroCuenta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public int getNroCuenta() {
        return nroCuenta;
    }

    public void setNroCuenta(int nroCuenta) {
        this.nroCuenta = nroCuenta;
    }

    public Long getId() {
        return id;
    }
}
