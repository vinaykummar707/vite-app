import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { json } from "react-router-dom";

// Define the function to fetch data
const fetchPatientsByHospitalId = async (hospitalId: string) => {
  const response = await axios.get(
    `http://localhost:3000/api/patients/hospital/${hospitalId}`
  );
  return response.data;
};

const postAddNewPatient = async (patientData: unknown) => {
  const response = await axios.post(
    "http://localhost:3000/api/patients",
    JSON.stringify(patientData),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};

// Create your custom hook
export const useGetPatientsByHospitalId = (hospitalId: string) => {
  return useQuery({
    queryKey: ["fetchPatientsByHospitalId"],
    queryFn: () => fetchPatientsByHospitalId(hospitalId),
  });
};

export const useAddNewPatient = () => {
  return useMutation({
    mutationKey: ["postAddNewPatient"],
    mutationFn: (patientData: unknown) => postAddNewPatient(patientData),
  });
};
