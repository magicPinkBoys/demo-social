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

const initialData = generateDataFromNodes(controlNodes, "rootNode");
const indrustryData = generateDataFromNodes(industry,"extractedFilesNode");
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
    //   { id: "rootNode", label: "sample", type: "diamond", shape: "dot" },
      ...initialData.nodes
    ]);
    const edges = new DataSet(initialData.edges);
    var options = {
      physics: { barnesHut: { gravitationalConstant: -4000 } },
      interaction: {
        multiselect: true
      }
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

      network.on("dragEnd", (event) => {
        const [clickedNode] = event.nodes;
        if (!clickedNode) return;
        console.log(clickedNode);
        nodes.update({ id: clickedNode, fixed: true });
      });
      network.on("dragStart", (event) => {
        const [clickedNode] = event.nodes;
        if (!clickedNode) return;
        nodes.update({ id: clickedNode, fixed: false });
      });
      network.on("click", (event: any) => {
        const [clickedNode] = event.nodes;
        const dataMap = {
          extractedFilesNode: indrustryData,
          music: jobPositionMusicData,
          performingArt: jobPositionPerfomingArtData

          /* undefined: () => currentGraphData */
        };
        if (!(clickedNode in dataMap)) return;
        console.log(clickedNode);

        if (
          edges.get({
            filter: (item) => item.from === clickedNode
          }).length
        ) {
          const connected = network.getConnectedNodes(clickedNode);

          connected.forEach((element) => {
            if (element !== "rootNode") {
              const child = nodes.get(element);
              nodes.update({ ...child, hidden: !child.hidden });
            }
          });
          //console.log(network.getConnectedNodes(clickedNode));
          return;
        }

        nodes.add(dataMap[clickedNode].nodes);
        edges.add(dataMap[clickedNode].edges);
      });
    }
  }, []);

  return (
    <>
      <button onClick={handleClick}>Focus</button>

      <div style={{ height: 700, width: "100%" }} ref={ref} />
    </>
  );
};
