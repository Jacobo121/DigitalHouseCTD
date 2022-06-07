import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Mail {
    public static void main(String[] args) {
        List<Contacto> listaContacto = new ArrayList<>();

        Contacto contacto1 = new Contacto();
        contacto1.setNombre("Jacobo");
        contacto1.setMail("jacobo@gmail.com");
        contacto1.getTelefono(1232123);

        Contacto contacto2 = new Contacto();
        contacto2.setNombre("isa");
        contacto2.setMail("isa@gmail.com");
        contacto2.getTelefono(12323);

        listaContacto.add(contacto1);
        listaContacto.add(contacto2);

        FileOutputStream fo;

        try {
            fo = new FileOutputStream("OutputFile.txt");
            ObjectOutputStream dos = new ObjectOutputStream(fo);
            dos.writeObject(listaContacto);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        List<Contacto> listaContacto2 = null;
        FileInputStream fi = null;
        try {
            fi = new FileInputStream("OutputFile.txt");
            ObjectInputStream ois = new ObjectInputStream(fi);
            listaContacto2 = (List<Contacto>) ois.readObject();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        for(Contacto contacto : listaContacto2);
        System.out.println(listaContacto);
    }
}
