import  { useEffect, useRef } from "react";
import { Network,  IdType } from "vis-network";
import { DataSet } from "vis-data";

import { data, graphs } from "../data/graph";
import { getGraphsChildNodes, getGraphsChildNodesRecursively, getGraphsEdges, getGraphsEdgesOfNodeAndChildNodes, getGraphsNodeFromNodeId, getGraphsNodes, getGraphsWithDataType, isNodeInGraph } from "../utils/GraphUtils";
import { DataType } from "../models/enums/DataType";
 
let network: Network;

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialGraphs = getGraphsWithDataType(data, DataType.ROOT);

    const nodes = new DataSet(getGraphsNodes(initialGraphs));
    const edges = new DataSet(getGraphsEdges(initialGraphs));

    var options = {
      
      interaction: {
        navigationButtons: true,
      },

      nodes: {
        shape: "circle",
      },
      // chosen: {
      //   node: function (values, id, selected, hovering) {
      //     console.log(id);
      //   },
      // },
      physics: { barnesHut: { gravitationalConstant: -4000 } },
      // physics: false,
      // interaction: {
      //   multiselect: true
      // }
    };
    if (!network) {
      if (ref.current){
        network = new Network(
          ref.current,
          {
            nodes: nodes,
            edges: edges
          },
          options
        );
  
        network.on("click", (event) => {
          const [clickedNodeId] = event.nodes as IdType[];
          const clickedNode = getGraphsNodeFromNodeId(graphs, clickedNodeId);
  
          if (!clickedNode) return;
  
          // ตรวจสอบว่าโหนดมีลูกไหม
          const childNodes = edges.get({
            filter: (edge) => edge.to === clickedNode.id
          });
          
          if (childNodes.length) {
            // มีลูก ให้ลบลูกทั้งหมด
            nodes.remove(getGraphsChildNodesRecursively(graphs, clickedNode));
            edges.remove(getGraphsEdgesOfNodeAndChildNodes(graphs, clickedNode));
          } else {
            // ไม่มีลูก ให้เพิ่มโหนดใหม่
            if (!(isNodeInGraph(graphs, clickedNode))) return;
            
            nodes.add(getGraphsChildNodes(graphs, clickedNode));
            edges.add(getGraphsEdgesOfNodeAndChildNodes(graphs, clickedNode));
          }
        });
      }
    }
  }, []);

  return (
    <div className="container-app">
      <div style={{ height: "100", width: "100%", backgroundColor:"#fff" , borderRadius: "10px" }} ref={ref} />
    </div>
  );
};
