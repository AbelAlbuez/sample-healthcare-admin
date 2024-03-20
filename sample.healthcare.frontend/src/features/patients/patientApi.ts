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
    addPatient: builder.mutation<Patient, Partial<Patient>>({
      query: (newPatient) => ({
        url: "",
        method: "POST",
        body: newPatient,
      }),
      invalidatesTags: [PATIENT_API_TAG_TYPES.patient],
    }),
    updatePatient: builder.mutation<
      Patient,
      { id: string; updatedPatient: Partial<Patient> }
    >({
      query: ({ id, updatedPatient }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedPatient,
      }),
      invalidatesTags: [PATIENT_API_TAG_TYPES.patient],
    }),
    deletePatient: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [PATIENT_API_TAG_TYPES.patient],
    }),
  }),
});

export const {
  useGetPatientsQuery,
  useAddPatientMutation,
  useUpdatePatientMutation,
  useDeletePatientMutation,
} = patientApi;
