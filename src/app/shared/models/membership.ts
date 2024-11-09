export class Membership {
    MembershipId: number = 0;  // AutoField primary key equivalent in TypeScript
    MembershipType: string = '';  // CharField as string
    IsActive: boolean = true; 
}
