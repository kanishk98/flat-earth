import { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import { getFlatEarthGraph } from "./service";
import { flowStyles } from "./styles";

export default function Editor() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    getFlatEarthGraph();
  });

  return <ReactFlow elements={elements} style={flowStyles} />;
}
