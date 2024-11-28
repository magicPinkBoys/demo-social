import { create } from "zustand";
import {
  PersonalInfo,
  JobsPositionInfo,
  FormData,
} from "../components/validationSchema";
import { submitFormPost, UserData } from "../utils/submitForm";


interface JobAppState {
  step: number;
  formData: FormData;
  con1: boolean;
  con2: boolean;
  con3: boolean;
  nextStep: () => void;
  prevStep: () => void;
  getTotalSteps: () => number;
  setPersonalInfo: (data: Partial<PersonalInfo>) => void;
  setJobsPositionInfo: (data: Partial<JobsPositionInfo>) => void;
  submitForm: () => Promise<void>;
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
  submitForm: async () => {
    const state = get();
    if (!(state.con1 && state.con2 && state.con3)){
      console.log('do it again')
    }else{
      const toSend: UserData = {
        educationLevel: state.formData.jobsPositionInfo.educationLevel!,
        industry: state.formData.jobsPositionInfo.industry!,
        job: state.formData.jobsPositionInfo.job!,
        member: state.formData.jobsPositionInfo.member!,
        salary: "1000",
        skill: state.formData.jobsPositionInfo.skill!,
        workDescription: state.formData.jobsPositionInfo.workDescription,
        yearOfWork: "year0",
        dateOfBirth: state.formData.personalInfo.dateOfBirth,
        email: state.formData.personalInfo.email,
        firstName: state.formData.personalInfo.firstName,
        lastName: state.formData.personalInfo.lastName,
        phone: state.formData.personalInfo.phone,
      }

      await submitFormPost(toSend);
    console.log("Form submitted Successfully!");
    console.log("Submitted Data: ", state.formData);
  }

    set(() => {
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