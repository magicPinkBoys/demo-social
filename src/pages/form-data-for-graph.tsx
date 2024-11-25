import { create } from "zustand";
import {
  PersonalInfo,
  JobsPositionInfo,
  FormData,
} from "../components/validationSchema";


interface JobAppState {
  step: number;
  formData: FormData;
  // textForStep: ["Personal information", "Work information", "Confirmation"],
  con1: boolean;
  con2: boolean;
  con3: boolean;
  nextStep: () => void;
  prevStep: () => void;
  getTotalSteps: () => number;
  setPersonalInfo: (data: Partial<PersonalInfo>) => void;
  setJobsPositionInfo: (data: Partial<JobsPositionInfo>) => void;
  submitForm: () => void;
  setCon1: ()=> void;
  setCon2: ()=> void;
  setCon3: ()=> void;
}

const useFormSchema = create<JobAppState>((set, get) => ({
  step: 1,
  formData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: undefined,
    },
    jobsPositionInfo: {
        industry: undefined,
        job: undefined,
        skill: undefined,
        workDescription: "",
        educationLevel: undefined,
        member: "",
      },
    
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  con1: false,
  con2: false,
  con3: false,


  setCon1: () => set((state) => ({con1: !state.con1})),
  setCon2: () => set((state) => ({con2: !state.con2})),
  setCon3: () => set((state) => ({con3: !state.con3})),

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
      if (!(state.con1 && state.con2 && state.con3)){
        console.log('do it again')
      }else{
      console.log("Form submitted Successfully!");
      console.log("Submitted Data: ", state.formData);
    }
      return {
        step: 1,
        formData: {
          personalInfo: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            gender: undefined,
          },
          jobsPositionInfo: {
              industry: undefined,
              job: undefined,
              skill: undefined,
              workDescription: "",
              educationLevel: undefined,
              member: "",
            },
            },
      };
    });
  },
}));

export default useFormSchema;