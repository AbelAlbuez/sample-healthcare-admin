import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddPatientRequest, Patient, UpdatePatientRequest } from "./model";
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
    addPatient: builder.mutation<Patient, Partial<AddPatientRequest>>({
      query: (newPatient) => ({
        url: "",
        method: "POST",
        body: newPatient,
      }),
      invalidatesTags: [PATIENT_API_TAG_TYPES.patient],
    }),
    updatePatient: builder.mutation<
      Patient,
      {
        id: string;
        patient: UpdatePatientRequest;
      }
    >({
      query: ({ id, patient }) => ({
        url: `/${id}`,
        method: "PUT",
        body: patient,
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
