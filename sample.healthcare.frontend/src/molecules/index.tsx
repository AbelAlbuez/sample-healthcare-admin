import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
interface ConfirmationAlertProps {
  open: boolean;
  onClose: (isOpen: boolean) => void;
  onAction: () => void;
}
export const ConfirmationAlert = (props: ConfirmationAlertProps) => {
  const { open, onClose, onAction } = props;

  const handleClose = () => {
    onClose(false);
  };

  const handleAction = () => {
    onAction();
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>Are you sure?</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAction} color="error" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationAlert;
