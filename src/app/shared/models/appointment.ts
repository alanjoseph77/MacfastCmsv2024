import { Patient } from "./patient";
import { Doctor } from "./doctor";
export class Appointment {
    
        AppointmentId: number = 0;  // AutoField primary key equivalent in TypeScript
        AppointmentDate: Date = new Date();  // DateTimeField as a Date object in TypeScript
        TokenNumber: number = 0;  // IntegerField as a number
        ConsultationStatus: string = '';  // CharField as string
        PatientId: number = 0;  // ForeignKey to Patient, represented as an ID
        DoctorId: number = 0;  // ForeignKey to Doctor, represented as an ID
        IsActive: boolean = true;  // BooleanField with a default value of true
    
        // Object Oriented Model (optional)
        Patient: Patient = new Patient();  // Assuming Patient is a class
        Doctor: Doctor = new Doctor();  // Assuming Doctor is a class
    }
    
