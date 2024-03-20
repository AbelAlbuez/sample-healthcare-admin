import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useGetPatientsQuery } from "./patientApi";
import { PatientTable } from "./PatientTable";

export const PatientComponent = () => {
  const { data: patients, isLoading, isError } = useGetPatientsQuery();
  console.log(patients)
  const onDelete = (patientId: number) => {};
  return (
    <div>
      <PatientTable patients={patients || []} onDelete={onDelete} />
    </div>
  );
};
