import {z} from "zod"

export const personalInfoSchema= z.object({
    firstName: z.string().min(3, "Name is Required"),
    lastName: z.string().min(1, "Last Name is Required"),
    email: z.string().email("Invalid email address"),
    phone: z.string()
    .length(10, "phone Number must be 10 digits")
    .regex(/^\d+$/, "Phone Number must contain only digits"),
    birthDay: z.string().date("Select your birthday"),
    gender: z.string().min(3, "Gender is requried"),
});

export const jobsPositionInfoSchema = z.object({
    industry: z.string().min(3, "Industry is Required"),
    job: z.string().min(3, "Job is Required"),
    skill: z.string().min(3, "Skill is requried"),
    workDescription: z.string().min(3, "Work Description is requried"),
    educationLevel: z.string().min(3, "Education is requried"),
    
});

export const formDataSchema = z.object({
    personalInfo: personalInfoSchema,
    jobsPositionInfo: jobsPositionInfoSchema,
});

//types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type JobsPositionInfo = z.infer<typeof jobsPositionInfoSchema>
export type FormData = z.infer<typeof formDataSchema>;
