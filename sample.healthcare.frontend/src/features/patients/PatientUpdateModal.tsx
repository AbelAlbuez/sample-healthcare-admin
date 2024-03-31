import React from "react";
import { Box, Grid, Modal, Typography, styled } from "@mui/material";
import { PatientForm } from "./PatientForm";

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const BoxModalWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  width: "660px",
  padding: "24px",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  borderRadius: "8px",
  background: theme.palette.common.white,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

export const UpdatePatientModal = (props: Props) => {
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
          Update Patient
        </Typography>
        <PatientForm />
      </BoxModalWrapper>
    </Modal>
  );
};
