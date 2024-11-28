import { Data } from "../models/Data";
import { Graph } from "../models/interfaces/Graph";
import { getAllUsers } from "../utils/getAllUsers";
import { getGraphs } from "../utils/GraphUtils";
import { industries, jobs, root, skills } from "./graphData";

const users = await getAllUsers()

export const data: Data[] = [root].concat(industries).concat(jobs).concat(skills).concat(users);

export const graphs: Graph[] = getGraphs(data);
