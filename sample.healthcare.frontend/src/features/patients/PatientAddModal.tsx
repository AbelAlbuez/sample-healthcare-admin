import React from "react";
import { Modal, Typography } from "@mui/material";
import { BoxModalWrapper } from "./PatientUpdateModal";
import { PatientForm } from "./PatientForm";

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const AddPatientModal = (props: Props) => {
  const { isOpen, onCloseModal } = props;
  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxModalWrapper>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Patient
        </Typography>
       <PatientForm/>
      </BoxModalWrapper>
    </Modal>
  );
};
