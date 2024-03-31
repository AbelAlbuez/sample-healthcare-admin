import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import {
  useAddPatientMutation,
  useDeletePatientMutation,
  useGetPatientsQuery,
  useUpdatePatientMutation,
} from "./patientApi";
import { PatientTable } from "./PatientTable";
import { AddPatientRequest, UpdatePatientRequest } from "./model";

export const PatientComponent = () => {
  const { data: patients } = useGetPatientsQuery();
  const [deletePatient] = useDeletePatientMutation();
  const [updatePatient] = useUpdatePatientMutation();
  const [addPatient] = useAddPatientMutation();

  const onDeletePatient = async (patientId: string) => {
    await deletePatient(patientId);
  };

  const onAddPatient = async (patientToAdd: AddPatientRequest) => {
    await addPatient(patientToAdd);
  };

  const onUpdatePatient = async (
    id: string,
    patientToUpdate: UpdatePatientRequest
  ) => {
    const request = { id, patient: patientToUpdate };
    updatePatient(request);
  };
  return (
    <div>
      <PatientTable
        patients={patients || []}
        onDeletePatient={onDeletePatient}
        onAddPatient={onAddPatient}
        onUpdatePatient={onUpdatePatient}
      />
    </div>
  );
};
