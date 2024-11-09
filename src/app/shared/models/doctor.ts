import { Specialization } from "./specialization";
import { Staff } from "./staff";
export class Doctor {

        DoctorId: number = 0;  // AutoField primary key equivalent in TypeScript
        ConsultationFee: number = 0;  // DecimalField as number (float)
        SpecializationId: number = 0;  // ForeignKey to Specialization, represented as an ID
        StaffId: number = 0;  // OneToOneField to Staff, represented as an ID
        IsActive: boolean = true;  // BooleanField with default value of true
    
        // Object-Oriented Model (optional)
        Specialization: Specialization = new Specialization();  // Assuming Specialization is a class
        Staff: Staff = new Staff();  // Assuming Staff is a class
    }
    

