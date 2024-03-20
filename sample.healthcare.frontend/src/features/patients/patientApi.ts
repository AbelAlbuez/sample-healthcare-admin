import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Patient } from "./PatientTable";

export const PATIENT_API_TAG_TYPES = {
  patient: "patient",
};

export const patientApi = createApi({
  reducerPath: "patientApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/Patients" }),
  tagTypes: [PATIENT_API_TAG_TYPES.patient],
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => "",
      providesTags: [PATIENT_API_TAG_TYPES.patient],
    }),
  }),
});

export const { useGetPatientsQuery } = patientApi;
