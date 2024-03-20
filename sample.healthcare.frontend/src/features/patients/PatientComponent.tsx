import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useDeletePatientMutation, useGetPatientsQuery } from "./patientApi";
import { PatientTable } from "./PatientTable";

export const PatientComponent = () => {
  const { data: patients } = useGetPatientsQuery();
  const [deletePatient ] = useDeletePatientMutation();
  console.log(patients)
  const onDelete = async (patientId: string) => {
    await deletePatient(patientId);
  };
  return (
    <div>
      <PatientTable patients={patients || []} onDelete={onDelete} />
    </div>
  );
};
