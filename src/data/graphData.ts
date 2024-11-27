import { Data } from "../models/Data";
import { DataType } from "../models/enums/DataType";

export const root: Data = new Data("root", "Industry Group", DataType.ROOT);

export const industries: Data[] = [
    new Data("I01", "Industry 1", DataType.INDUSTRY, root),
    new Data("I02", "Industry 2", DataType.INDUSTRY, root),
];

export const jobs: Data[] = [
    new Data("J01", "Job 1", DataType.JOB, industries[0]),
    new Data("J02", "Job 2", DataType.JOB, industries[0]),

    new Data("J03", "Job 3", DataType.JOB, industries[1]),
    new Data("J04", "Job 4", DataType.JOB, industries[1]),
];

export const skills: Data[] = [
    new Data("S01", "Skill 1", DataType.SKILL, jobs[0]),
    new Data("S02", "Skill 2", DataType.SKILL, jobs[0]),
    
    new Data("S03", "Skill 3", DataType.SKILL, jobs[1]),
    new Data("S04", "Skill 4", DataType.SKILL, jobs[1]),

    new Data("S05", "Skill 5", DataType.SKILL, jobs[2]),
    new Data("S06", "Skill 6", DataType.SKILL, jobs[2]),

    new Data("S07", "Skill 7", DataType.SKILL, jobs[3]),
    new Data("S08", "Skill 8", DataType.SKILL, jobs[3]),
];
