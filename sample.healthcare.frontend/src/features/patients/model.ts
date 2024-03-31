export interface Patient {
  patientID: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  patientStatus: number;
}

export interface AddPatientRequest {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface UpdatePatientRequest {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  patientStatus: number;
}
