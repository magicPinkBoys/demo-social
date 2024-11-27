import  { useEffect, useRef } from "react";
import { Options, Edge, Node, Network, NetworkEvents, IdType } from "vis-network";
import { DataSet } from "vis-data";

import { industry } from "../data/dataIndustry";
import { jobPositionMusic, 
        jobPositionPerfomingArt, 
        jobPositionNewMediaArt,
        jobPositionFilm,
        jobPositionGameAndAnimation,
        jobPositionDigitalPublishing,
        jobPositionAdvertising,
        jobPositionDesign,
        jobPositionArchitecture,
        jobPositionOther
       } from "../data/dataJobPosition";
import { data, graphs } from "../data/graph";
import { getGraphsChildNodes, getGraphsChildNodesRecursively, getGraphsEdges, getGraphsEdgesOfNodeAndChildNodes, getGraphsNodeFromNodeId, getGraphsNodes, getGraphsWithDataType, isNodeInGraph } from "../utils/GraphUtils";
import { industries } from "../data/graphData";
import { DataType } from "../models/enums/DataType";

// const element = document.createElement("div");

const generateDataFromNodes = (nodes: any, parentNodeId: any) => ({
  nodes: nodes,
  edges: nodes.map((node: any) => ({ from: parentNodeId, to: node.id }))
});

const generateDataFromNodesSetByForm = (nodes: any, edges: any) => ({
  nodes: nodes,
  edges: edges,
});

const controlNodes = [
  {
    id: "extractedFilesNode",
    label: "กลุ่มอุตสาหกรรม \nIndustry",
    group: 1,
    // value: 300,
    color: "#FFEA00",
  },
];

const initialData = generateDataFromNodes(controlNodes, "rootNode");
// const indrustryData = generateDataFromNodes(industry,"extractedFilesNode");
// const jobPositionMusicData = generateDataFromNodes(jobPositionMusic, "music");
// const jobPositionPerfomingArtData = generateDataFromNodes(jobPositionPerfomingArt, "performingArt");
// const jobPositionNewMediaArtData = generateDataFromNodes(jobPositionNewMediaArt, "newMediaArt");
// const jobPositionFilmData = generateDataFromNodes(jobPositionFilm, "film");
// const jobPositionGameAndAnimationData = generateDataFromNodes(jobPositionGameAndAnimation, "game-and-animation");

let network: Network;
let theNodePositions = [];
let theEdgePositions = [];

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!network) return;
    network.focus("rootNode");
  };

  function savePosition() {
    let gpPositions = network.getPositions();
    let edgePositions = network.body.edges;

    // Either way
    for (const [key, value] of Object.entries(gpPositions)) {
      let tempObj = {
        id: parseInt(key),
        x: value.x,
        y: value.y
      };
      theNodePositions.push(tempObj);
    }
    for (let edgeId in edgePositions) {
      theEdgePositions.push({
        from: edgePositions[edgeId].from["id"],
        to: edgePositions[edgeId].to["id"]
      });
    }
  }

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
      // physics: { barnesHut: { gravitationalConstant: -4000 } },
      // physics: false,
      // interaction: {
      //   multiselect: true
      // }
    };
    if (!network) {
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
  }, []);

  // ฟังก์ชันหาลูกหลานทั้งหมดของโหนด
  // function getAllChildNodes(parentNodeId, edges) {
  //   const childNodeIds = [];
  //   const stack = [parentNodeId];

  //   while (stack.length > 0) {
  //     const currentNodeId = stack.pop();

  //     // หา edges ที่เชื่อมจากโหนดนี้
  //     const connectedEdges = edges.get({
  //       filter: (item) => item.from === currentNodeId,
  //     });

  //     // ดึง ID ของ child nodes และเพิ่มเข้าไปในรายการ
  //     const childIds = connectedEdges.map((edge) => edge.to);
  //     childNodeIds.push(...childIds);

  //     // เพิ่มลูกของลูกเข้า stack เพื่อตรวจสอบต่อ
  //     stack.push(...childIds);
  //   }

  //   return childNodeIds;
  // }

  return (
    <div className="container-app">
      <div style={{ height: "100", width: "100%", backgroundColor:"#fff" , borderRadius: "10px" }} ref={ref} />
    </div>
  );
};
