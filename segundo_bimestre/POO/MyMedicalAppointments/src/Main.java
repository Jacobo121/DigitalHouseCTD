import model.Doctor;
import model.Patient;

public class Main {
    public static void main(String[] args) {
        //showMenu();
        Doctor myDoctor = new Doctor("Jacobo", "jacobo@jacobo.com");
        //System.out.println(myDoctor);
        myDoctor.addAvaibleAppointment("03/03/22", "4pm");
        myDoctor.addAvaibleAppointment("03/03/22", "10am");
        myDoctor.addAvaibleAppointment("03/03/22", "1pm");

        System.out.println(myDoctor);

        /*
        for (model.Doctor.AvaibleAppointment aA: myDoctor.avaibleAppointments) {
            System.out.println(aA.getDate() + " " + aA.getTime());
        }*/

        Patient patient = new Patient("Alejandra", "alejandra@mail.com");
        System.out.println(patient);
        //model.Patient@75b84c92
    }
}
