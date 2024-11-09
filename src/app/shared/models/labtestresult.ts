import { Labtest } from './labtest';
import { Appointment } from './appointment';
export class Labtestresult {
    
    LabTestPrescriptionId: number = 0;  // AutoField primary key equivalent in TypeScript
    LabTestId: number = 0;  // ForeignKey, typically represented by the ID of the related model
    LabTestValue: number = 0;  // DecimalField represented as a number (or float in TypeScript)
    CreatedDate: Date = new Date();  // DateTimeField default value
    Remarks: string = '';  // TextField as string
    AppointmentId: number = 0;  // ForeignKey, represented by the ID of the Appointment
    IsActive: boolean = true;  // BooleanField with default value of True

    // Object Oriented Model (optional)
    Appointment: Appointment = new Appointment();  // Assuming Appointment is a class like Department in your example
    LabTest: Labtest = new Labtest();
}

