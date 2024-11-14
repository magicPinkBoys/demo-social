import { create } from "zustand";
import {
  PersonalInfo,
  JobsPositionInfo,
  FormData,
} from "../components/validationSchema";

interface JobAppState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  getTotalSteps: () => number;
  setPersonalInfo: (data: Partial<PersonalInfo>) => void;
  setJobsPositionInfo: (data: Partial<JobsPositionInfo>) => void;
  submitForm: () => void;
}

const useFormSchema = create<JobAppState>((set, get) => ({
  step: 1,
  formData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDay: "",
      gender: "",
    },
    jobsPositionInfo: {
        industry: "",
        job: "",
        skill: "",
        workDescription: "",
        educationLevel: "",
      },
    
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  getTotalSteps: () => {
    return Object.keys(get().formData).length + 1;
  },
  setPersonalInfo: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        personalInfo: {
          ...state.formData.personalInfo,
          ...data,
        },
      },
    })),
    setJobsPositionInfo: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            jobsPositionInfo: {
              ...state.formData.jobsPositionInfo,
              ...data,
            },
          },
        })),
  submitForm: () => {
    set((state) => {
      console.log("Form submitted Successfully!");
      console.log("Submitted Data: ", state.formData);
      return {
        step: 1,
        formData: {
            personalInfo: {
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              birthDay: "",
              gender: "",
            },
            jobsPositionInfo: {
                industry: "",
                job: "",
                skill: "",
                workDescription: "",
                educationLevel: "",
              },
            },
      };
    });
  },
}));

export default useFormSchema;