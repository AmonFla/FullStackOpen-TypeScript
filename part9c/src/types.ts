// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface Diagnosis{
    code: string;
    name: string;
    latin?: string;

}

export enum Gender {
    Other = 'other',
    Male = 'male',
    Female = 'female'
}

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}
  
interface HealthCheckEntry extends BaseEntry {
   type: "HealthCheck";
   healthCheckRating: HealthCheckRating;
}

export interface Discharge{
    date: string;
    criteria: string;
 }

interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge: Discharge;
 }

 interface SickLeave{
    startDate: string;
    endDate: string;
 }

 interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    sickLeave?: SickLeave,
    employerName: string;
 }

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export interface Patient{
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string,
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export type NoExtraPatientInfo = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id' | 'entries'>;
export type NewBaseEntry = Omit<BaseEntry, 'id'>;
export type NewEntry = Omit<Entry, 'id'>;