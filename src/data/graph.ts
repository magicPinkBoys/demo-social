import { Data } from "../models/Data";
import { Graph } from "../models/interfaces/Graph";
import { getGraphs } from "../utils/GraphUtils";
import { industries, jobs, root, skills } from "./graphData";

export const data: Data[] = [root].concat(industries).concat(jobs).concat(skills);

export const graphs: Graph[] = getGraphs(data);
