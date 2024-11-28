import  { useEffect, useRef, useState } from "react";
import { Network,  IdType } from "vis-network";
import { DataSet } from "vis-data";

import { data } from "../data/graph";
import { getGraphs, getGraphsChildNodes, getGraphsChildNodesRecursively, getGraphsEdges, getGraphsEdgesOfNodeAndChildNodes, getGraphsNodeFromNodeId, getGraphsNodes, getGraphsWithDataType, isNodeInGraph } from "../utils/GraphUtils";
import { DataType } from "../models/enums/DataType";
import { getAllUsers } from "../utils/getAllUsers";
import { Data } from "../models/Data";
import { GraphType } from "../models/interfaces/Graph";
 
let network: Network;

export default function Graph() {
  const ref = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllUsers();
      setUser(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const totalData = data.concat(user);
    console.log(totalData)
    const initialGraphs = getGraphsWithDataType(totalData, DataType.ROOT);
    const graphs: GraphType[] = getGraphs(totalData);

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
    if (!network || ref.current) {
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
          console.log(childNodes);
          
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
  }, [user]);

  return (
    <div className="container-app">
      <div style={{ height: "100", width: "100%", backgroundColor:"#fff" , borderRadius: "10px" }} ref={ref} />
    </div>
  );
};
