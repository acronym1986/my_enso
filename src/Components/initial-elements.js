import React from "react";
import Frontend from "./FlowComponents/Frontend";
import Backend from './FlowComponents/Backend'
import Ap from './FlowComponents/Ap'
import Ap2 from './FlowComponents/Ap2'
import Sml from './FlowComponents/Sml'
import Smp from './FlowComponents/Smp'
import Webserver from './FlowComponents/Webserver'
import As4Message from './FlowComponents/As4Message'
import Ocr from './FlowComponents/Ocr'
import Database from './FlowComponents/Database'
import Delivery from './FlowComponents/Delivery'
import Sap from './FlowComponents/Sap'
import Email from './FlowComponents/Email'

const componentStyles = {
    width: 200,
    border: "none",
    padding: 0,
  };

export default [
  {
    id: "1",
    style: componentStyles,
    type: "input",
    data: { label: <Frontend/>},
    sourcePosition: "left",
    position: { x: 600, y: 50 },
  },
  {
    id: "2",
    style: componentStyles,
    data: { label: <Sml/>},
    position: { x: 600, y: 250 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3",
    style: componentStyles,
    data: { label: <Backend/>},
    sourcePosition: "bottom",
    targetPosition: "right",
    position: { x: 300, y: 50 },//180//background: "#D6D5E6",color: "#333", border: "1px solid #222138",}
  },
  {
    id: "4",
    style: {width:150},
    type: 'Node',
    position: { x: 320, y: 260 },
    data: { label: <Ap/>},
    sourcePosition: "bottom",
    targetPosition: "top",
  },
  {
    id: "5",
    style: componentStyles,
    data: { label: <Smp/>},
    sourcePosition: "bottom",
    targetPosition: "left",
    position: { x: 600, y: 450 }
  },
  {
    id: "6",
    style: componentStyles,
    data: { label: <Webserver/>},
    sourcePosition: "bottom",
    targetPosition: "top",
    position: { x: 0, y: 280 }
  },
  {
    id: "7",
    style: componentStyles,
    data: { label: <As4Message/>},
    sourcePosition: "bottom",
    targetPosition: "top",
    position: { x: 300, y: 550 }
  },
  {
    id: "8",
    style: componentStyles,
    data: { label: <Ocr/>},
    sourcePosition: "right",
    targetPosition: "top",
    position: { x: 0, y: 550 }
  },
  {
    id: "9",
    style: componentStyles,
    data: { label: <Database/>},
    sourcePosition: "bottom",
    targetPosition: "top",
    position: { x: 900, y: 450 }
  },
  {
    id: "10",
    style: componentStyles,
    data: { label: <Delivery/>},
    sourcePosition: "right",
    targetPosition: "top",
    position: { x: 300, y: 800 }
  },
  {
    id: "11",
    style: {width:150},
    type: 'Node',
    data: { label: <Ap2/>},
    sourcePosition: "bottom",
    targetPosition: "left",
    position: { x: 700, y: 800 }
  },
  {
    id: "12",
    style: componentStyles,
    data: { label: <Sap/>},
    sourcePosition: "bottom",
    position: { x: 600, y: 1000 }
  },
  {
    id: "13",
    style: componentStyles,
    type: "input",
    data: { label: <Email/>},
    sourcePosition: "bottom",
    position: { x: 0, y: 50 }
  },
  ///////connect
  { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "blue", strokeWidth: 2, cursor: "pointer"}},
  { id: "e2-9", source: "2", target: "9", animated: true, style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e1-3", source: "3", target: "6", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" }},
  { id: "e3-4", source: "3", target: "4", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" }},
  { id: "e4-5", source: "4", target: "5", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e5-9", source: "5", target: "9", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e4-2", source: "4", target: "2", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" },},
  { id: "e4-7", source: "4", target: "7", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e6-7", source: "6", target: "7", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e7-10", source: "7", target: "10", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" }},
  { id: "e6-8", source: "6", target: "8", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e8-7", source: "8", target: "7", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e9-10", source: "9", target: "10", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e10-11", source: "10", target: "11", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e11-12", source: "11", target: "12", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" } },
  { id: "e13-6", source: "13", target: "6", animated: true,style: { stroke: "blue", strokeWidth: 1.5, cursor: "pointer" }},
];