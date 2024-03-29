import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import ConfirmationAlert from "@/molecules";

export interface Patient {
  patientID: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  patientStatus: number;
}

interface Props {
  onDelete: (patientId: string) => Promise<void>;
  patients: Patient[];
}
export const PatientTable = (props: Props) => {
  const { onDelete, patients } = props;
  const [open, setOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(0);

  const handleDeleteOpen = (id: number) => {
    setSelectedPatientId(id);
    setOpen(true);
  };

  const handleDeleteClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete(String(selectedPatientId));
  };
  const [formattedPatients, setFormattedPatients] = useState<Patient[]>([]);

  useEffect(() => {
    if (patients) {
      const formattedPatients = patients.map((patient) => {
        const dateOfBirth = new Date(patient.dateOfBirth);

        const formattedDateOfBirth = `${dateOfBirth.getDate()}/${
          dateOfBirth.getMonth() + 1
        }/${dateOfBirth.getFullYear()}`;

        return {
          ...patient,
          dateOfBirth: formattedDateOfBirth,
        };
      });
      setFormattedPatients(formattedPatients);
    }
  }, [patients]);
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>PatientID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Patient Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedPatients.map((patient) => (
            <TableRow key={patient.patientID}>
              <TableCell>{patient.patientID}</TableCell>
              <TableCell>{patient.firstName}</TableCell>
              <TableCell>{patient.lastName}</TableCell>
              <TableCell>{patient.dateOfBirth}</TableCell>
              <TableCell>{patient.patientStatus}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteOpen(patient.patientID)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmationAlert
        open={open}
        onClose={handleDeleteClose}
        onAction={() => handleDelete()}
      />
    </>
  );
};
