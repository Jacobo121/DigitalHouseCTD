package model;

import java.util.ArrayList;

public class Doctor extends User {


    private String speciality;

    public Doctor(String name, String email) {
        super(name, email);
        System.out.println("El nombre del model.Doctor asignado es: " + name);
        this.speciality = speciality;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    ArrayList<AvaibleAppointment> avaibleAppointments = new ArrayList<>();
    public void addAvaibleAppointment(String date, String time) {
        avaibleAppointments.add(new AvaibleAppointment(date, time));
    }

    public ArrayList<AvaibleAppointment> getAvaibleAppointments() {
        return avaibleAppointments;
    }

    @Override
    public String toString() {
        return super.toString() + "model.Doctor{" +
                "speciality='" + speciality + '\'' +
                ", avaibleAppointments=" + avaibleAppointments.toString() +
                '}';
    }

    public static class AvaibleAppointment {
        private int id_avaibleAppointment;
        private String date;
        private String time;
        //AvaiableAppointment

        public AvaibleAppointment(String date, String time) {
            this.date = date;
            this.time = time;
        }

        public int getId_avaibleAppointment() {
            return id_avaibleAppointment;
        }

        public void setId_avaibleAppointment(int id_avaibleAppointment) {
            this.id_avaibleAppointment = id_avaibleAppointment;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }

        @Override
        public String toString() {
            return "AvaibleAppointment: " +
                    "id_avaibleAppointment=" + id_avaibleAppointment +
                    "\n date='" + date +
                    "\n time='" + time ;
        }
    }
}
