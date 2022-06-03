import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class Test {
    private static final String SQL_CREATE_TABLE = "DROP TABLE IF EXISTS CUENTA; CREATE TABLE CUENTA "
            + "("
            + "ID INT PRIMARY KEY, "
            + "NOMBRE varchar(100) NOT NULL, "
            + "NRO_CUENTA NUMERIC(10,2) NOT NULL "
            + "SALDO INT NOT NULL"
            + ");";
    private static final String SQL_INSERT = "INSERT INTO CUENTA (ID, NOMBRE, NRO_CUENTA, SALDO) VALUES (?,?,?,?)";
    private static final String SQL_UPDATE = "UPDATE CUENTA EST SALDO=? WHERE ID=?";

    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager .getConnection("jdbc:h2:~/test", "sa", "");
    }

    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta(12, "Sueldo", 10);
        Connection connection = null;

        try {
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(SQL_CREATE_TABLE);

            PreparedStatement psInsert = connection.prepareStatement(SQL_INSERT);
            psInsert.setInt(1, 1);
            psInsert.setString(2, cuenta.getNombre());
            psInsert.setInt(3, cuenta.getNroCuenta());
            psInsert.setDouble(4, cuenta.getSaldo());

            psInsert.execute();

            

        } catch (Exception e) {
            throw new RuntimeException(e);
        }


    }

}
