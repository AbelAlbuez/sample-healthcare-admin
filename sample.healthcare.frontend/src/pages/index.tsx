import { PatientComponent } from "@/features/patients";
import { AppTemplate } from "@/templates";
import React from "react";

const PatientPage = () => {
  return <AppTemplate component={<PatientComponent />} />;
};

export default PatientPage;
