import { Data } from "../models/Data";
import { industries, jobs, root, skills } from "./graphData";


export const data: Data[] = [root].concat(industries).concat(jobs).concat(skills);
