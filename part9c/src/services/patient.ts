import data from '../../data/patients';
import { NoExtraPatientInfo, Patient, NewPatient, NewEntry, Entry } from '../types';
import { v4 as uuid } from 'uuid';

const getPatients = (): NoExtraPatientInfo[] => {
    return data.map(
            ({id,name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender, 
        occupation
        })
    );
    
};

const getPatientById = (id: string): Patient | undefined => {
    
    return data.find( (p: Patient ) => p.id === id );
    
};

const addPatient = (body: NewPatient) : Patient =>{
    const newPatient: Patient = {
        id: uuid(),
        entries: [],
        ...body
    };

    data.push(newPatient);
    return newPatient;
};

const addPatientEntry = ((id:string, entry: NewEntry) : Patient | undefined =>{
    data.map(p => {
        if(p.id === id){
            p.entries = [...p.entries, <Entry>{id:uuid(), ...entry}];
        }
        return p;
    });
    return getPatientById(id);
});

export default {
    getPatients,
    addPatient,
    getPatientById,
    addPatientEntry
};