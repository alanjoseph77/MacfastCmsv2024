import { Membership } from "./membership";
export class Patient {
    
        PatientId: number = 0;  // AutoField primary key equivalent in TypeScript
        PatientName: string = '';  // CharField as string
        DateOfBirth: Date = new Date();  // DateField as Date object in TypeScript
        Gender: string = '';  // CharField as string
        MobileNumber: string = '';  // CharField as string (for phone numbers)
        Address: string = '';  // TextField as string
        MembershipId: number = 0;  // ForeignKey to Membership, represented as an ID
        IsActive: boolean = true;  // BooleanField with default value of true
    
        // Object Oriented Model (optional)
        Membership: Membership = new Membership();  // Assuming Membership is a class
    }
    

