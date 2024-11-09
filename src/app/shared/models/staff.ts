import { Role } from "./role";
export class Staff {
    
        StaffId: number = 0;  // AutoField primary key equivalent in TypeScript
        FullName: string = '';  // CharField as string
        Gender: string = '';  // CharField as string
        JoiningDate: Date = new Date();  // DateField as Date object in TypeScript
        MobileNumber: string = '';  // CharField as string (for phone numbers)
        UserName: string = '';  // CharField as string, unique in Django but not enforced in TypeScript
        Password: string = '';  // CharField as string (store hashed password in actual application)
        RoleId: number = 0;  // ForeignKey to Role, represented as an ID
        IsActive: boolean = true;  // BooleanField with default value of true
    
        // Object-Oriented Model (optional)
        Role: Role = new Role();  // Assuming Role is a class
    }
    

