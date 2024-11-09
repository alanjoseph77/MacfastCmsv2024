import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Labtestresult } from '../models/labtestresult';
import { Labtest } from '../models/labtest';
import { Appointment } from '../models/appointment';

export class LabTestResultService {

  labTestResults: Labtestresult[] = [];
  labTests: Labtest[] = [];
  appointments: Appointment[] = [];
  labTestResult: Labtestresult = new Labtestresult();

  constructor(private httpClient: HttpClient) {}

  // Get all lab test results


bindListLabTestResults(): void {
  // console.log("hiiii")
  this.httpClient.get<Employee[]>(environment.apiUrl + "employees/")
    .subscribe({
      next: response => this.employees = response,   // Success handling
      error: error => console.error('Error:', error), // Error handling
      complete: () => console.log('Request complete') // Completion handling
    });
}
//insert method
insertLabTestResults(LabTestResults:Labtestresult){
  return this.httpClient.post(environment.apiUrl + "labtestresults/",Labtestresult)
}

//get all appointments
getAllAppointment(): void {
  console.log('In service');
  this.httpClient.get<Appointment[]>(environment.apiUrl + 'appointment/')
    .subscribe({
      next: (response) => {
        console.log(response);
        this.appointments = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
} 
// updateLabTestPrescriptionId(Labtestresult: Labtestresult):  Observable<any>{
// console.log("Update in service")
// return this.httpClient.put(environment.apiUrl+'Labtestresult/' + Labtestresult.LabTestPrescriptionId +'/',Labtestresult );
// }

getAllLabtest(): void {
  console.log('In service');
  this.httpClient.get<Labtest[]>(environment.apiUrl + 'labtest/')
    .subscribe({
      next: (response) => {
        console.log(response);
        this.labTests = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
} 
updateLabTestPrescriptionId(Labtestresult: Labtestresult):  Observable<any>{
console.log("Update in service")
return this.httpClient.put(environment.apiUrl+'Labtestresult/' + Labtestresult.LabTestPrescriptionId +'/',Labtestresult );
}

}