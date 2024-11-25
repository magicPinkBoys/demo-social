import  { useEffect, useRef } from "react";
import { Options, Edge, Node, Network } from "vis-network";
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
const indrustryData = generateDataFromNodes(industry,"extractedFilesNode");
const jobPositionMusicData = generateDataFromNodes(jobPositionMusic, "music");
const jobPositionPerfomingArtData = generateDataFromNodes(jobPositionPerfomingArt, "performingArt");
const jobPositionNewMediaArtData = generateDataFromNodes(jobPositionNewMediaArt, "newMediaArt");
const jobPositionFilmData = generateDataFromNodes(jobPositionFilm, "film");
const jobPositionGameAndAnimationData = generateDataFromNodes(jobPositionGameAndAnimation, "game-and-animation");

let network: any;
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
    const nodes = new DataSet([
      // { id: "rootNode", label: "sample", type: "diamond", shape: "dot", color:"#222222" },
      ...initialData.nodes
    ]);
    const edges = new DataSet(initialData.edges);
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
        const [clickedNode] = event.nodes;
        const dataMap = {
          // initialData,
          extractedFilesNode: indrustryData,
          music: jobPositionMusicData,
          performingArt: jobPositionPerfomingArtData,
          newMediaArt: jobPositionNewMediaArtData,
        };

        if (!clickedNode) return;

        // ตรวจสอบว่าโหนดมีลูกไหม
        const connectedEdges = edges.get({
          filter: (item) => item.from === clickedNode,
        });

        if (connectedEdges.length) {
          // มีลูก ให้ลบลูกทั้งหมด
          const childNodeIds = getAllChildNodes(clickedNode, edges);
          nodes.remove(childNodeIds);
          edges.remove(connectedEdges);
        } else {
          // ไม่มีลูก ให้เพิ่มโหนดใหม่
          if (!(clickedNode in dataMap)) return;

          nodes.add(dataMap[clickedNode].nodes);
          edges.add(dataMap[clickedNode].edges);
        }
      });
    }
  }, []);

  // ฟังก์ชันหาลูกหลานทั้งหมดของโหนด
  function getAllChildNodes(parentNodeId, edges) {
    const childNodeIds = [];
    const stack = [parentNodeId];

    while (stack.length > 0) {
      const currentNodeId = stack.pop();

      // หา edges ที่เชื่อมจากโหนดนี้
      const connectedEdges = edges.get({
        filter: (item) => item.from === currentNodeId,
      });

      // ดึง ID ของ child nodes และเพิ่มเข้าไปในรายการ
      const childIds = connectedEdges.map((edge) => edge.to);
      childNodeIds.push(...childIds);

      // เพิ่มลูกของลูกเข้า stack เพื่อตรวจสอบต่อ
      stack.push(...childIds);
    }

    return childNodeIds;
  }

  return (
    <div className="container-app">
      <div style={{ height: "100", width: "100%", backgroundColor:"#fff" , borderRadius: "10px" }} ref={ref} />
    </div>
  );
};
