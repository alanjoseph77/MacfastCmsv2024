import { Labtestcategory }  from './labtestcategory'
export class Labtest {
   
        LabTestId: number = 0;  // AutoField primary key equivalent in TypeScript
        TestName: string = '';  // CharField as string
        Amount: number = 0;  // DecimalField as number (float type in TypeScript)
        ReferenceMinRange: number = 0;  // DecimalField as number (float)
        ReferenceMaxRange: number = 0;  // DecimalField as number (float)
        SampleRequired: string = '';  // CharField as string
        LabTestCategoryId: number = 0;  // ForeignKey to LabTestCategory, represented as an ID
        IsActive: boolean = true;  // BooleanField with default value of true
    
        // Object Oriented Model (optional)
        LabTestCategory: Labtestcategory = new Labtestcategory();  // Assuming LabTestCategory is a class
    }
    

