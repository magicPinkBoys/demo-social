import {z} from "zod"



export const personalInfoSchema= z.object({
    firstName: z.string().min(3, "Name is Required"),
    lastName: z.string().min(1, "Last Name is Required"),
    email: z.string().email("Invalid email address"),
    phone: z.string()
    .length(10, "phone Number must be 10 digits")
    .regex(/^\d+$/, "Phone Number must contain only digits"),
    dateOfBirth: z.string().date(),
    gender: z.enum(["male", "female", "other"], {
        message: "Gender is required",
      }).nullish(),
});

export const jobsPositionInfoSchema = z.object({
    industry: z.enum(["music",
        "performing-arts",
        "new-media-art",
        "film",
        "digital-publishing",
        "game-and-animation",
        "advertising",
        "design",
        "architecture",
        "others",], {
        message: "Industry is required",
      }).nullish(),
    job: z.enum(["music",
    "performing-arts",
    "new-media-art",
    "film",
    "digital-publishing",
    "game-and-animation",
    "advertising",
    "design",
    "architecture",
    "others",], {
        message: "Job is required",
      }).nullish(),
    skill: z.enum(["music",
        "performing-arts",
        "new-media-art",
        "film",
        "digital-publishing",
        "game-and-animation",
        "advertising",
        "design",
        "architecture",
        "others",], {
        message: "Industry is required",
      }).nullish(),
    workDescription: z.string().min(3, "Work Description is requried"),
    yearOfWork: z.enum(["year0",
        "year1",
        "year2",
        "year3",
        "year4",
        "year5",
        "year6",], {
        message: "year is required",
      }).nullish(),
    salary: z.enum(["salary1",
        "salary2",
        "salary3",
        "salary4",
        "salary5",
        "salary6",
    ], {
        message: "salary is required",
      }).nullish(),
    educationLevel: z.enum(["vocational-certificate",
        "diploma-high-vocational-certificate",
        "bachelor-degrees",
        "master-degrees",
        "doctoral-degrees",], {
        message: "education is required",
      }).nullish(),
      member: z.string().min(3, "member is requried"),
});

export const formDataSchema = z.object({
    personalInfo: personalInfoSchema,
    jobsPositionInfo: jobsPositionInfoSchema,
});

//types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type JobsPositionInfo = z.infer<typeof jobsPositionInfoSchema>
export type FormData = z.infer<typeof formDataSchema>;
