import React, { useEffect, useRef } from "react";
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
import { colors } from "@mui/material";

const element = document.createElement("div");

const generateDataFromNodes = (nodes: any, parentNodeId: any) => ({
  nodes: nodes,
  edges: nodes.map((node: any) => ({ from: parentNodeId, to: node.id }))
});

const controlNodes = [
  {
    id: "extractedFilesNode",
    label: "กลุ่มอุตสาหกรรม Industry",
    shape: "dot",
    group: 1,
    // color: rgba(255,255,255,1);
    x: 0,
    y: 0,
    physics: false,
    // visible: true,
    // ctxRenderer: ({ ctx, id, x, y, state: { selected, hover }, style }) => {
    //   const drawNode = () => {
    //     const points = [
    //       { value: 1, color: "red" },
    //       { value: 0, color: "orange" },

    //       { value: 0, color: "blue" }
    //     ];
    //     const radius = 30;
    //     const totalValue = points.reduce((sum, point) => sum + point.value, 0);
    //     let startAngle = 0;

    //     for (let i = 0; i < points.length; i++) {
    //       const point = points[i];
    //       const slicePercentage = point.value / totalValue;
    //       const endAngle = startAngle + 2 * Math.PI * slicePercentage;

    //       ctx.beginPath();
    //       ctx.moveTo(x, y);
    //       ctx.arc(x, y, radius, startAngle, endAngle - 0.1, false);
    //       ctx.closePath();

    //       ctx.fillStyle = point.color; // Set the color of the chart chunk
    //       ctx.fill();

    //       ctx.font = "12px bold serif";
    //       ctx.fillStyle = "black";
    //       ctx.fillText("label test", x - 20, y + 40);
    //       //ctx.fillText("custom shape", x - 5 , y + 40, 10);

    //       startAngle = endAngle;
    //     }
    //   };
    //   return {
    //     drawNode,
    //     nodeDimensions: { width: 20, height: 20 }
    //   };
    // }
  },
];

const initialData = generateDataFromNodes(industry, "rootNode");
const indrustryData = generateDataFromNodes(jobPositionPerfomingArt,"music");
const jobPositionMusicData = generateDataFromNodes(jobPositionMusic, "music");
const jobPositionPerfomingArtData = generateDataFromNodes(jobPositionPerfomingArt, "performingArt");
const jobPositionNewMediaArtData = generateDataFromNodes(jobPositionNewMediaArt, "new-media-art");
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
      { id: "rootNode", label: "sample", type: "diamond", shape: "dot", color:"#222222" },
      ...initialData.nodes
    ]);
    const edges = new DataSet(initialData.edges);
    var options = {
      height: "900px",
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
          extractedFilesNode: indrustryData,
          music: jobPositionMusicData,
          performingArt: jobPositionPerfomingArtData,
          // musician: softwareData
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
    <>
      {/* <button onClick={handleClick}>Focus</button> */}

      <div style={{ height: "100%", width: "100%", backgroundColor:"#fff" , borderRadius: "10px" }} ref={ref} />
    </>
  );
};
