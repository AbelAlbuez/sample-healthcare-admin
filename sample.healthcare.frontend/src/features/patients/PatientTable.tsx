import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid,
} from "@mui/material";
import { ConfirmationAlert } from "@/molecules";
import { AddPatientRequest, Patient, UpdatePatientRequest } from "./model";
import { AddPatientModal } from "./PatientAddModal";
import { UpdatePatientModal } from "./PatientUpdateModal";
import { DeletePatientModal } from "./PatientDeleteModal";
interface Props {
  onDeletePatient: (patientId: string) => Promise<void>;
  onAddPatient: (patient: AddPatientRequest) => Promise<void>;
  onUpdatePatient: (id: string, patient: UpdatePatientRequest) => Promise<void>;
  patients: Patient[];
}
export const PatientTable = (props: Props) => {
  const { onDeletePatient, patients } = props;
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(0);

  const handleOpenAddModal = () => {
    setIsOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setIsOpenAddModal(false);
  };

  const handleOpenUpdateModal = (id: number) => {
    setSelectedPatientId(id);
    setIsOpenUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setIsOpenUpdateModal(false);
  };

  const handleOpenDeleteModal = (id: number) => {
    setSelectedPatientId(id);
    setIsOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
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
      <Grid item xs={12} margin={3}>
        <Grid container>
          <Grid item xs={12}>
            <Button onClick={() => handleOpenAddModal()}>Add Patient</Button>
          </Grid>
          <Grid item xs={12}>
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
                      <Button
                        onClick={() => handleOpenDeleteModal(patient.patientID)}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => handleOpenUpdateModal(patient.patientID)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>

      <UpdatePatientModal
        isOpen={isOpenUpdateModal}
        onCloseModal={handleCloseUpdateModal}
      />
      <AddPatientModal
        isOpen={isOpenAddModal}
        onCloseModal={handleCloseAddModal}
      />
      <DeletePatientModal
        isOpen={isOpenDeleteModal}
        onCloseModal={handleCloseDeleteModal}
      />
    </>
  );
};
