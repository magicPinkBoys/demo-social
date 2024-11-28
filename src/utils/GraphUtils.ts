import { Edge, IdType, Node } from "vis-network";
import { GraphType } from "../models/interfaces/Graph";
import { Data } from "../models/Data";
import { DataType } from "../models/enums/DataType";

export function getGraph(data: Data): GraphType {
    return <GraphType>{
        node: <Node>{
            id: data.id,
            label: data.label
        },
        edge: <Edge>{
            from: data.id,
            to: data.link?.id,
        }
    };
}

export function getGraphs(data: Data[]): GraphType[] {
    const graphs: GraphType[] = [];

    data.forEach(d => {
        const obtainedData = getGraph(d);
        graphs.push(obtainedData);
    })

    return graphs;
}

export function getGraphsNodeFromNodeId(graphs: GraphType[], nodeId: IdType): Node | null {
    return graphs.find(
        graph => graph.node.id === nodeId
    )?.node ?? null;
}

export function isNodeInGraph(graphs: GraphType[], node: Node): boolean {
    return graphs.filter(
        graph => graph.node.id === node.id
    ).length > 0;
}

export function getGraphsChildNodes(graphs: GraphType[], node: Node): Node[] {
    return graphs.filter(
        graph => node.id === graph.edge.to
    ).map(
        graph => graph.node
    );
}

export function getGraphsChildNodesRecursively(graphs: GraphType[], node: Node): Node[] {
    let nodes: Node[] = [];

    let recursedNodes: Node[] = [];
    
    const childNodes = getGraphsChildNodes(graphs, node);
    nodes = nodes.concat(childNodes);

    recurseGetGraphsChildNodes(graphs, childNodes, recursedNodes);

    nodes.concat(recursedNodes);

    console.log(nodes);
    

    return nodes;
}

function recurseGetGraphsChildNodes(graphs: GraphType[], nodes: Node[], recursedNodes: Node[]) {
    let nodesResult: Node[] = [];

    nodes.forEach(node => {
        nodesResult = getGraphsChildNodes(graphs, node);
        recurseGetGraphsChildNodes(graphs, nodesResult, recursedNodes);
    });

    nodesResult.forEach(
        node => {
            recursedNodes.push(node);
        }
    );
}

export function getGraphsEdgesOfNodeAndChildNodes(graphs: GraphType[], node: Node): Edge[] {
    return graphs.filter(
        graph => node.id === graph.edge.to
    ).map(
        graph => graph.edge
    );
}

export function getGraphsWithDataType(data: Data[], dataType: DataType): GraphType[] {
    return getGraphs(
        data.filter(
            d => d.type === dataType
        )
    );
}

export function getGraphsNodes(graphs: GraphType[]): Node[] {
    return graphs.map(
        graph => graph.node
    );
}

export function getGraphsEdges(graphs: GraphType[]): Edge[] {
    return graphs.map(
        graph => graph.edge
    );
}
